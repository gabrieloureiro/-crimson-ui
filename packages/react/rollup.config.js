import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

import pkg from './package.json';

const env = process.env.NODE_ENV;

const plugins = [
  resolve(),
  commonjs({
    exclude: 'node_modules',
    ignoreGlobal: true,
  }),
  typescript({
    useTsconfigDeclarationDir: true,
    tsconfigOverride: {
      exclude: ['**/*.stories.*'],
    },
  }),
  replace({
    'process.env.NODE_ENV': JSON.stringify(env),
    preventAssignment: true,
  }),
  env === 'production' && terser(),
];

export default {
  input: 'src/index.ts',
  output: [
    { file: pkg.main, format: 'cjs' },
    { file: pkg.module, format: 'es' },
  ],
  external: ['react', 'react-dom', 'react-icons', '@crimson-ui/colors'],
  plugins: [...plugins],
};
