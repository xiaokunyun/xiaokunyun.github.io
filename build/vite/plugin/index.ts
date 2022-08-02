import vue from '@vitejs/plugin-vue';
import WindiCSS from 'vite-plugin-windicss';
import legacy from '@vitejs/plugin-legacy';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { VantResolver, ArcoResolver } from 'unplugin-vue-components/resolvers';
export default function createVitePlugins() {
  const vitePlugins = [
    vue(),
    WindiCSS(),
    legacy({ targets: ['defaults', 'not IE 11'] }),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      imports: ['vue', 'vue-router'],
      dts: false, // "src/auto-imports.d.ts",
      // dts: false
      eslintrc: {
        enabled: true, // Default `false`
        filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },
    }),
    Components({
      resolvers: [VantResolver(), ArcoResolver()],
      // dirs: ["src/components"],
      dts: false, //"src/components.d.ts",
    }),
  ];
  vitePlugins.push();

  return vitePlugins;
}
