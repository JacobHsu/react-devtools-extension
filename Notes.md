# Note

## background.js

shells\webextension\src\background.js

setIconAndPopup
- chrome.browserAction.setIcon
- chrome.browserAction.setPopup

chrome.runtime.onMessage.addListener

## frontend\Panel.js

`/* globals chrome */`
chrome.tabs.create

### Detecting When DevTools Opens and Closes

port.onDisconnect.addListener