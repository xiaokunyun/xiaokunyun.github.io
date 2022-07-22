import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'url'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import legacy from '@vitejs/plugin-legacy'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), WindiCSS(),
  legacy({ targets: ['defaults', 'not IE 11'] }),
  AutoImport({
    include: [
      /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
      /\.vue$/, /\.vue\?vue/, // .vue
      /\.md$/, // .md
    ],
    imports: ['vue', 'vue-router',],
    dts: 'src/auto-imports.d.ts',
    eslintrc: {
      enabled: true, // <-- this
    },
  }),
  Components({ dirs: ['src/components'], dts: 'src/components.d.ts', }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
})
