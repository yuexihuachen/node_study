# explain

## 插件 案例
* 插件是对一组 js 接口、自定义组件或页面的封装，用于嵌入到小程序中使用。
* 插件不能独立运行，必须嵌入在其他小程序中才能被用户使用；而第三方小程序在使用插件时，也无法看到插件的代码。
* 因此，插件适合用来封装自己的功能或服务，提供给第三方小程序进行展示和使用。

## 新建插件类型的项目后，如果创建示例项目，则项目中将包含三个目录：
* plugin 目录：插件代码目录。
* miniprogram 目录：放置一个小程序，用于调试插件。
* doc 目录：用于放置插件开发文档。
* miniprogram 目录内容可以当成普通小程序来编写，用于插件调试、预览和审核。下面的内容主要介绍 plugin 中的插件代及 doc 中的插件开发文档。

## 插件配置文件
* `
{
  "publicComponents": {
    "hello-component": "components/hello-component"
  },
  "pages": {
    "hello-page": "pages/hello-page"
  },
  "main": "index.js"
}
`
