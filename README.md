# Webpack-learning
极客时间 Webpack视频课 实践
https://time.geekbang.org/course/intro/190
# webpack构建

`npm run build`

# Entry
打包入口：单入口和多入口

# output
打包输出
```
filename：
path：
```

# loaders
webpack原生只支持JS和JSON，通过Loaders去支持其他文件类型
![-w408](media/15591758838832/15591793140637.jpg)
test 指定匹配规则
use 指定使用的loader名称

# Plugins
插件，优化、资源管理、环境注入
作用于整个构建过程
![-w408](media/15591758838832/15591796302760.jpg)
# Mode
指定当前环境：production、development、none 
![-w571](media/15591758838832/15591806799993.jpg)

# 解析ES6和React JSX
增加ES6的babel preset 配置
`npm i @babel/core @babel/preset-env babel-loader -D`
`npm i react react-dom @babel/preset-react -D`

# 解析CSS、Less和Sass
css-loader 用于加载.css文件，并且转换成commonjs对象
style-loader将样式<style>标签插入到head中
`npm i style-loader css-loader -D`

