chrome.browserAction.onClicked.addListener(function () {
    chrome.tabs.create({ selected: true, url: "pages/cacl.html" });
});