import { defineConfig } from 'vite'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import WindiCSS from 'vite-plugin-windicss'
import { ViteAliases } from 'vite-aliases'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins: [
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue\??/, // .vue
      ],
      imports: ['vue'],
    }),
    svgLoader({
      svgo: false,
    }),
    ViteAliases({
      dir: '.vitepress/theme',
      deep: true,
      adjustDuplicates: true,
    }),
    Components({
      dirs: ['.vitepress/theme/components', '.vitepress/comps'],
      extensions: ['vue', 'ts'],
      directoryAsNamespace: true,
      globalNamespaces: ['global'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      exclude: [/node_modules/, /\.git/],
      resolvers: [
        IconsResolver({
          componentPrefix: '',
        }),
      ],
    }),
    Icons({
      defaultStyle: 'vertical-align: middle;',
    }),
    WindiCSS({
      scan: {
        dirs: ['.vitepress'],
        include: ['index.md'],
        exclude: ['**/examples/**/*'],
        fileExtensions: ['vue', 'ts'],
      },
    }),
  ],
  optimizeDeps: {
    include: ['vue'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {},
      },
    },
  },
})

const { extname } = require('path')
const fs = require('fs').promises
const { compileTemplate } = require('@vue/compiler-sfc')

function svgLoader(options = {}) {
  const { svgoConfig, svgo } = options

  return {
    name: 'svg-loader',
    enforce: 'pre',

    async load(id) {
      const [path, parameter] = id.split('?')

      if (extname(path).startsWith('.svg') && parameter === 'component') {
        const svg = await fs.readFile(path, 'utf-8')

        const { code } = compileTemplate({
          id: JSON.stringify(id),
          source: svg,
          transformAssetUrls: false,
        })

        return `${code}\nexport default render`
      }
    },
  }
}
