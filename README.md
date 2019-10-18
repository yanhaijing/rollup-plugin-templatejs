# rollup-plugin-templatejs [![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/yanhaijing/rollup-plugin-templatejs/blob/master/LICENSE)

[template.js](https://github.com/yanhaijing/template.js)的rollup编译插件——一款javascript模板引擎。

## 安装

``` bash
$ npm install --save template_js@0.6.1 # 安装template运行时
$ npm install --save-dev rollup-plugin-templatejs # 安装template编译插件
```
**注意：template_js 必须是0.6.1**

## 配置
配置参数同[template.js](https://github.com/yanhaijing/template.js/blob/master/doc/api.md#templateconfig)参数一样，其中expression参数会作为获取template的表达式。

```js
import template from 'rollup-plugin-templatejs';

module.exports = {
    // 省略其他配置
    plugins: [
        template({
            sTag: '<#',
            eTag: '#>',
            expression: 'require("template_js")', // 获取template的表达式，如 `window.template`
            include: ['**/*.tmpl'], // 默认值
            exclude: 'node_modules/**', // 默认值
        })
    ]
};
```

新建模版文件demo.tmpl

```html
    <div>
        <#=abc#>
    </div>
```

在js中`require`模版文件，并渲染

```js
import tpl from './demo.tmpl';

document.getElementById('test').innerHTML = tpl({abc: 'yanhaijing'});
```

[demo](example)

## 报告问题

- [Issues](https://github.com/yanhaijing/rollup-plugin-templatejs/issues "report question")

## 更新日志

[更新日志](CHANGELOG.md)
