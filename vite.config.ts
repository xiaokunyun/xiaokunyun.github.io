import { defineConfig, UserConfigExport, ConfigEnv } from 'vite'
import { fileURLToPath, URL } from 'url'
import createVitePlugins from './build/vite/plugin'
import path, { resolve } from 'path'
function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir)
}
// import vue from '@vitejs/plugin-vue';
// import WindiCSS from 'vite-plugin-windicss';
// import legacy from '@vitejs/plugin-legacy';
// import AutoImport from 'unplugin-auto-import/vite';
// import Components from 'unplugin-vue-components/vite';
// import { VantResolver, ArcoResolver } from 'unplugin-vue-components/resolvers';
import alias from '@rollup/plugin-alias'
// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfigExport => {
  //
  // if (command === 'serve') {
  return defineConfig({
    // dev 独有配置
    plugins: createVitePlugins(),
    resolve: {
      alias: {
        // '@': fileURLToPath(new URL('./src', import.meta.url)),
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: { // 配置反向代理
      // https: true,
      // Listening on all local IPs
      host: true,
      open: true,
      port: 3251,
      // Load proxy configuration from .env
      proxy: {
        '/api': {
          // target: 'http://localhost:3251',
          target: 'https://api.imooc-admin.lgdsunday.club/',// 要代理的服务器地址
          changeOrigin: true,// 是否跨域
          // rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
    // build: {
    //   minify: 'terser',
    //   outDir: 'dist',
    // },
  })
  // } else {
  //   // command === 'build'
  //   return {
  //     // build 独有配置
  //   };
  // }
}
