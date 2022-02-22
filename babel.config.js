// 项目发布阶段使用的插件
const prodPlugins = []
if (process.env.NODE_ENV === 'production') {
  prodPlugins.push('transform-remove-console')
}
module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk'
      }
    ],
    // 'transform-remove-console',
    // 发布产品使用的插件
    ...prodPlugins,
    '@babel/plugin-syntax-dynamic-import'
  ]
}
