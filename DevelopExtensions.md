# Develop Extensions - Google Chrome

background.js

```js
// 長時間訊息的接受 runtime.onConnect
chrome.runtime.onConnect.addListener
```

contentScript.js

```js
var port = chrome.runtime.connect({
  name: 'content-script',
});

port.onMessage.addListener
window.postMessage
```

[chrome.tabs.executeScript](https://crxdoc-zh.appspot.com/extensions/tabs#method-executeScript) 在頁面中插入JavaScript代碼