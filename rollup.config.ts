import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import tsPlugin from '@rollup/plugin-typescript';
import { defineConfig } from 'rollup';

const rollupConfig = defineConfig({
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'esm',
      sourcemap: true
    }
  ],
  plugins: [
    resolve({ preferBuiltins: true }), // 处理node_modules依赖
    commonjs(), // 转换CommonJS模块
    json(), // 支持JSON文件导入
    alias({
      entries: [{ find: '@', replacement: 'src' }]
    }),
    tsPlugin({
      tsconfig: './tsconfig.json' // 显式指定配置文件
    })
  ]
});

export default rollupConfig;
