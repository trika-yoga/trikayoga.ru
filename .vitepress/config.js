import mdLinks from "markdown-it-external-links";
import mdClass from "markdown-it-classy";
import mdSup from "markdown-it-sup";
import mdContainer from "markdown-it-container";

const isProd = process.env.NODE_ENV === "production";
const site = isProd ? "https://trikayoga.ru/" : "http://localhost:3333";

const meta = {
  title: "Трика йога",
  description:
    "Открытое собрание мантр, янтр и писаний Трика йоги и Кашмирского шиваизма",
  author: "davay42",
  tags: "трика, йога, мантра, янтра, тантра, священные писания, шива, шива-сутра, бхайрава",
  icon: "/img/sadvidya.svg",
  site: "www.trikayoga.ru",
  image: '/img/trishula.png'
};

export default {
  title: meta.title,
  description: meta.description,
  lang: "ru",
  head: [
    ["script", { async: true, defer: true, "data-website-id": "78d67b86-8879-4563-9052-6369f93c872c", src: "https://stats.defucc.me/umami.js" }],

    ["meta", { name: "author", content: meta.author }],
    ["meta", { name: "keywords", content: meta.tags }],
    ["link", { rel: "icon", type: "image/svg+xml", href: meta.icon }],
    [
      "meta",
      {
        name: "apple-mobile-web-app-status-bar-style",
        content: "white-translucent",
      },
    ],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    ["meta", { name: "HandheldFriendly", content: "True" }],
    ["meta", { name: "MobileOptimized", content: "320" }],
    ["meta", { name: "theme-color", content: "#ffff00" }],

    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:locale", content: "ru-RU" }],
    ["meta", { property: "og:site", content: meta.site }],
    ["meta", { property: "og:site_name", content: meta.title }],
  ],
  transformHead(ctx) {
    const url = ctx.pageData.relativePath.split('index.md')[0]
    let image = meta?.image
    if (ctx.pageData.frontmatter?.cover) {
      image = 'media_files/cover/' + url.split('/').join('-') + ctx.pageData.frontmatter?.cover
    }
    return [
      ['meta', { property: 'og:title', content: ctx.pageData?.title + ' | Трика йога' }],
      ['meta', { property: 'og:description', content: ctx.pageData?.description }],
      ['meta', { property: 'og:url', content: site + url }],
      ['meta', { property: 'og:image', content: site + image }],
      ['meta', { name: 'twitter:title', content: ctx.pageData.title + ' | Трика йога' }],
      ['meta', { name: 'twitter:description', content: ctx.pageData.description }],
      ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
      ['meta', { name: 'twitter:site', content: `@${meta?.author}` }],
      ['meta', { name: 'twitter:creator', content: `@${meta?.author}` }],
      ['meta', { name: 'twitter:image', content: site + image }],
    ]
  },
  themeConfig: {
    repo: "",
    logo: "/img/sadvidya.svg",
  },

  markdown: {
    config: (md) => {
      // md.use(mdClass);
      md.use(mdSup);
      md.use(mdContainer, "stanza", {
        render: function (tokens, idx) {
          var m = tokens[idx].info.trim().match(/^stanza\s+(.*)$/);

          if (tokens[idx].nesting === 1) {
            let text = md.utils.escapeHtml(m?.[1] || "");
            let tag = "";
            if (text)
              tag = `<a href="#s${text}" id="s${text}" class="num" >${text}</a>`;
            // opening tag
            return `<div class="stanza">${tag}
            `;
          } else {
            // closing tag
            return "</div>\n";
          }
        },
      });
      md.use(mdLinks, {
        internalDomains: ["localhost", "trikayoga.ru"],
      });
    },
  },
};
