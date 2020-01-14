# react-devtools-extension

[React Developer Tools](https://github.com/facebook/react-devtools/tree/v3)
`$ git checkout v3`

`yarn add chalk -D`

## Docs

[Extending DevTools](https://developer.chrome.com/extensions/devtools)

## webextension/build.js

`npm i cli-spinners log-update fs-extra`
`npm i child-process-promise`
`npm i adm-zip`

## webpack.config.js

`yarn add webpack webpack-cli`
`npm i @babel/plugin-transform-flow-strip-types @babel/plugin-proposal-class-properties`
`yarn add @babel/core @babel/preset-env @babel/preset-react @babel/preset-flow`

module loader
`yarn add babel-loader style-loader css-loader`

## shells\webextension\src\main.js

`chrome.devtools.panels.create('React', '', 'panel.html'`

## Docs

[ReactDOM.unmountComponentAtNode](http://react.html.cn/docs/react-dom.html#unmountcomponentatnode) panel.js

## References

[#!/usr/bin/env node 到底是什麼？](https://juejin.im/post/5cb93cd651882578b148c637)

配置`#!/usr/bin/env node`,就是解決了不同的用戶node路徑不同的問題，可以讓系統動態的去查找node來執行你的腳本文件。
