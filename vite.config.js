import { defineConfig } from "vite";
import Components from "unplugin-vue-components/vite";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import AutoImport from "unplugin-auto-import/vite";

import Pages from "vite-plugin-pages";
import { extendRoutes } from "vitepress-pages";
import generateSitemap from 'vite-plugin-pages-sitemap'

import Unocss from 'unocss/vite'
import { transformerDirectives, presetIcons, presetUno, extractorSplit } from 'unocss'
import extractorPug from '@unocss/extractor-pug'

import path from "node:path";
import { fileURLToPath } from "node:url";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default defineConfig({
  server: {
    port: 3333,
  },
  resolve: {
    alias: {
      "#": path.resolve(dirname, ".vitepress/theme/"),
    }
  },
  plugins: [
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue\??/, // .vue
      ],
      imports: ["vue"],
    }),
    svgLoader({
      svgo: false,
    }),
    Pages({
      dirs: [
        { dir: ".", baseRoute: "." },
      ],
      exclude: ['**/node_modules/**/*.*', '**/!(index).md'],
      extensions: ['md'],
      ...extendRoutes({
        root: path.dirname(fileURLToPath(import.meta.url)),
        mediaTypes: {}
      }),
      onRoutesGenerated: routes => (generateSitemap({ routes, hostname: 'https://trikayoga.ru' })),
    }),
    Components({
      dirs: [".vitepress/theme/components", ".vitepress/comps"],
      extensions: ["vue", "ts"],
      directoryAsNamespace: true,
      globalNamespaces: ["global"],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      exclude: [/node_modules/, /\.git/],
      resolvers: [
        IconsResolver({
          componentPrefix: "",
        }),
      ],
    }),
    Icons({
      defaultStyle: "vertical-align: middle;",
    }),
    Unocss({
      transformers: [
        transformerDirectives(),
      ],
      presets: [
        presetIcons({
          scale: 1.2,
          extraProperties: {
            'vertical-align': 'middle'
          }
        }),
        presetUno(),
      ],
      extractors: [
        extractorSplit,
        extractorPug()
      ]
    }),
  ],
  optimizeDeps: {
    include: ["vue"],
  },
  build: {
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        manualChunks: {},
      },
    },
  },
});

const { extname } = require("path");
const fs = require("fs").promises;
const { compileTemplate } = require("@vue/compiler-sfc");

function svgLoader(options = {}) {
  const { svgoConfig, svgo } = options;

  return {
    name: "svg-loader",
    enforce: "pre",

    async load(id) {
      const [path, parameter] = id.split("?");

      if (extname(path).startsWith(".svg") && parameter === "component") {
        const svg = await fs.readFile(path, "utf-8");

        const { code } = compileTemplate({
          id: JSON.stringify(id),
          source: svg,
          transformAssetUrls: false,
        });

        return `${code}\nexport default render`;
      }
    },
  };
}
