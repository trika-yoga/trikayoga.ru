import mdLinks from "markdown-it-external-links";
import mdClass from "markdown-it-classy";
import mdSup from "markdown-it-sup";
import mdContainer from "markdown-it-container";

const meta = {
  title: "Трика йога",
  description:
    "Открытое собрание мантр, янтр и писаний Трика йоги и Кашмирского шиваизма",
  author: "Denis Starov",
  tags: "трика, йога, мантра, янтра, тантра, священные писания, шива, шива-сутра, бхайрава",
  icon: "/img/sadvidya.svg",
  site: "www.trikayoga.ru",
};

export default {
  title: meta.title,
  description: meta.description,
  lang: "ru",
  head: [
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

    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["meta", { name: "twitter:site", content: meta.site }],
    ["meta", { name: "twitter:title", value: meta.title }],
    ["meta", { name: "twitter:description", value: meta.description }],
    ["meta", { name: "twitter:image", content: meta.icon }],

    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:locale", content: "en-EN" }],
    ["meta", { property: "og:site", content: meta.site }],
    ["meta", { property: "og:site_name", content: meta.title }],
    ["meta", { property: "og:title", content: meta.title }],
    ["meta", { property: "og:image", content: meta.icon }],
    ["meta", { property: "og:description", content: meta.description }],
  ],
  themeConfig: {
    repo: "",
    logo: "/img/sadvidya.svg",
  },

  markdown: {
    config: (md) => {
      md.use(mdClass);
      md.use(mdSup);
      md.use(mdContainer, "sans", {
        marker: ";",
      });
      md.use(mdContainer, "trans", {
        marker: ";",
      });
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
