module.exports = {
  // 基于 airbnb 规则
  "extends": "airbnb",
  // 使用 babel 解析器，支持一些还没有进入 ES6+ 标准的特性。比如 class property
  parserOptions: {
    "parser": "babel-eslint",
  },
  "env": {
    "browser": true
  }
}