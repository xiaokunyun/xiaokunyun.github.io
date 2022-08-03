import vue from '@vitejs/plugin-vue';
import WindiCSS from 'vite-plugin-windicss';
import legacy from '@vitejs/plugin-legacy';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { VantResolver, ArcoResolver } from 'unplugin-vue-components/resolvers';
import alias from '@rollup/plugin-alias';
import { viteMockServe } from 'vite-plugin-mock';

// import { createMock } from './mock';
export default function createVitePlugins() {
  const vitePlugins = [
    vue(),
    alias(),
    WindiCSS({
      scan: {
        dirs: ['.'], // all files in the cwd
        fileExtensions: ['vue', 'js', 'ts'], // also enabled scanning for js/ts
      },
    }),
    legacy({ targets: ['defaults', 'not IE 11'] }),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      imports: ['vue', 'vue-router'],
      dts: 'src/auto-imports.d.ts', //false,
      // dts: false
      eslintrc: {
        enabled: false, // Default `false`
        // filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },
    }),
    Components({
      resolvers: [VantResolver(), ArcoResolver()],
      dirs: ['src/components'],
      dts: 'src/components.d.ts', //false, //
    }),
    // mock支持
    viteMockServe({
      mockPath: 'src/mock',
      supportTs: true,
      localEnabled: true,
      prodEnabled: true, // isBuild && VITE_BUILD_MOCK === 'true',
      injectCode: `
      import { setupProdMockServer } from '../src/mock/_createProductionServer';
      setupProdMockServer();
          `,
    }),
  ];
  // vitePlugins.push(createMock());

  return vitePlugins;
}
