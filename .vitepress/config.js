const getTags = require('vitepress-tags')

const pages = getTags('./')

const meta = {
  title: 'Трика йога',
  description:
    'Открытое собрание мантр, янтр и писаний Трика йоги и Кашмирского шиваизма',
  author: 'Denis Starov',
  tags:
    'трика, йога, мантра, янтра, тантра, священные писания, шива, шива-сутра, бхайрава',
  icon: '/img/sadvidya.svg',
  site: 'www.trikayoga.ru',
}

module.exports = {
  title: meta.title,
  description: meta.description,
  lang: 'ru',
  head: [
    ['meta', { name: 'author', content: meta.author }],
    ['meta', { name: 'keywords', content: meta.tags }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: meta.icon }],
    [
      'meta',
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'white-translucent',
      },
    ],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'HandheldFriendly', content: 'True' }],
    ['meta', { name: 'MobileOptimized', content: '320' }],
    ['meta', { name: 'theme-color', content: '#ffff00' }],

    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:site', content: meta.site }],
    ['meta', { name: 'twitter:title', value: meta.title }],
    ['meta', { name: 'twitter:description', value: meta.description }],
    ['meta', { name: 'twitter:image', content: meta.icon }],

    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'en-EN' }],
    ['meta', { property: 'og:site', content: meta.site }],
    ['meta', { property: 'og:site_name', content: meta.title }],
    ['meta', { property: 'og:title', content: meta.title }],
    ['meta', { property: 'og:image', content: meta.icon }],
    ['meta', { property: 'og:description', content: meta.description }],
  ],
  themeConfig: {
    nav: pages.main,
    repo: '',
    logo: '/img/sadvidya.svg',
  },

  markdown: {
    config: (md) => {
      md.use(require('markdown-it-classy'))
      md.use(require('markdown-it-sup'))
      md.use(require('markdown-it-container'), 'sans', {
        marker: ';',
      })
      md.use(require('markdown-it-container'), 'trans', {
        marker: ';',
      })
      md.use(require('markdown-it-container'), 'stanza', {
        render: function (tokens, idx) {
          var m = tokens[idx].info.trim().match(/^stanza\s+(.*)$/)

          if (tokens[idx].nesting === 1) {
            let text = md.utils.escapeHtml(m?.[1] || '')
            let tag = ''
            if (text)
              tag = `<a href="#s${text}" id="s${text}" class="num" >${text}</a>`
            // opening tag
            return `<div class="stanza">${tag}
            `
          } else {
            // closing tag
            return '</div>\n'
          }
        },
      })
      md.use(require('markdown-it-external-links'), {
        internalDomains: ['localhost', 'trikayoga.ru'],
      })
    },
  },
  customData: {
    pages,
  },
}
