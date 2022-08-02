import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'url';
import createVitePlugins from './build/vite/plugin';
import path, { resolve } from 'path';
function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}
import vue from '@vitejs/plugin-vue';
import WindiCSS from 'vite-plugin-windicss';
import legacy from '@vitejs/plugin-legacy';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { VantResolver, ArcoResolver } from 'unplugin-vue-components/resolvers';
import alias from '@rollup/plugin-alias';
// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // if (command === 'serve') {
  return {
    // dev 独有配置
    plugins: createVitePlugins(),
    resolve: {
      alias: {
        // '@': fileURLToPath(new URL('./src', import.meta.url)),
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      // https: true,
      // Listening on all local IPs
      host: true,
      open: true,
      port: 3251,
      // Load proxy configuration from .env
      proxy: {
        '/api': {
          target: 'http://localhost:3251',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
    // build: {
    //   minify: 'terser',
    //   outDir: 'dist',
    // },
  };
  // } else {
  //   // command === 'build'
  //   return {
  //     // build 独有配置
  //   };
  // }
});
// export default defineConfig({
//   plugins: [
//     vue(),
//     WindiCSS(),
//     legacy({ targets: ["defaults", "not IE 11"] }),
//     AutoImport({
//       include: [
//         /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
//         /\.vue$/,
//         /\.vue\?vue/, // .vue
//         /\.md$/, // .md
//       ],
//       imports: ["vue", "vue-router"],
//       dts: "src/auto-imports.d.ts",
//       // dts: false
//       eslintrc: {
//         enabled: true, // Default `false`
//         filepath: "./.eslintrc-auto-import.json", // Default `./.eslintrc-auto-import.json`
//         globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
//       },
//     }),
//     Components({
//       resolvers: [VantResolver(), ArcoResolver()],
//       dirs: ["src/components"],
//       dts: "src/components.d.ts",
//     }),
//   ],
//   resolve: {
//     alias: {
//       "@": fileURLToPath(new URL("./src", import.meta.url)),
//     },
//   },
//   server: {
//     // https: true,
//     // Listening on all local IPs
//     host: true,
//     open: true,
//     port: 3251,
//     // Load proxy configuration from .env
//     proxy: {
//       '/api':{
//         target: 'http://localhost:3251',
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/api/, '')
//       }
//     },
//   },
// });
