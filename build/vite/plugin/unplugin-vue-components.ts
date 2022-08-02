import Components from 'unplugin-vue-components/vite';
import { VantResolver, ArcoResolver } from 'unplugin-vue-components/resolvers';

export default function createComponents() {
  return Components({
    resolvers: [VantResolver(), ArcoResolver()],
    dirs: ['src/components'],
    dts: 'src/components.d.ts',
  });
}
