import { eslint } from 'rollup-plugin-eslint'
import typescript from 'rollup-plugin-typescript'
import {terser} from 'rollup-plugin-terser'

export default [
  {
    input: `example/ts/main.ts`,
    output: {
      file: 'example/js/main.js',
      format: 'umd'
    },
    plugins: [
      eslint(),
      typescript(),
      terser()
    ]
  }
]
