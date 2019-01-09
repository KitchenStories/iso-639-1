import filesize from 'rollup-plugin-filesize'
import cleaner from 'rollup-plugin-cleaner'

export default [{
  input: './src/index.js',
  output: {
    format: 'esm',
    file: './build/index.js',
  },
  plugins: [
    cleaner({
      targets: [
        './build/'
      ]
    }),
    filesize()
  ]
}]