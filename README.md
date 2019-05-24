# Style Demo
> Webpack4.x+Babel7.x+React16.x环境下配置CSS、Sass
> 导入Ant Design UI库

[Webpack4.x+Babel7.x+React16.x平台搭建请点击观看上一篇文章](https://github.com/fireworksflyaway/basic-demo)

## 新建项目
按照[上一篇文章](https://github.com/fireworksflyaway/basic-demo)的方法新建一个新项目style-demo

## 配置CSS和Sass支持
* 安装`sass-loader`和`node-sass`
```
npm i -D sass-loader node-sass
```
* 修改webpack.base.conf.js配置文件module属性
```
  module: {
    rules: [
      {
        loader: require.resolve('file-loader'),
        exclude:[/\.js$/,/\.jsx$/,/\.html$/,/\.json$/,/\.scss$/,/\.css$/],
        options:{
          name:'static/media/[name].[hash:8].[ext]',
        },
      },
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,// 屏蔽不需要处理的文件（文件夹）（可选）
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader','css-loader','sass-loader'],
      }
    ]
  },
```
* 新建一个scss样式文件，引入测试（略）

## 引入Ant Design
* 安装antd
```
npm i -S antd
```
* 安装babel-plugin-import工具实现按需加载
```
npm i -S babel-plugin-import
```
* 修改webpack.base.conf.js配置文件js的loader部分
```
{
    test: /\.js|jsx$/,
    exclude: /node_modules/,// 屏蔽不需要处理的文件（文件夹）（可选）
    loader: 'babel-loader',
    options:{
        plugins:
        [
            ['import', { libraryName: "antd", style: 'css' }],
        ]
    }
},
```
* 在App.js组件里面引入antd的组件，测试查看效果（略）



