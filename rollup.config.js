import filesize from 'rollup-plugin-filesize'
import cleaner from 'rollup-plugin-cleaner'

export default [{
  input: './src/index.js',
  output: [{
    format: 'esm',
    file: './build/index.js',
  }, {
    format: 'umd',
    file: './build/index.umd.js',
    name: 'ISO6391'
  }],
  plugins: [
    cleaner({
      targets: [
        './build/'
      ]
    }),
    filesize()
  ]
}]