var databases = {
    "IQDB": "https://iqdb.org/?url=",
    "TinEye": "https://www.tineye.com/search?url=",
    "SauceNAO": "just discovered there is already an extension for all this..."
};

chrome.contextMenus.onClicked.addListener
(
	function(info)
	{
        //(console.log(info);)
        var url = "https://";
        //(console.log("created url");)
        if (info.menuItemId.includes("iqdb")) {
            url += "iqdb.org/?url=";
        }
        else if (info.menuItemId.includes("tineye")) {
            url += "www.tineye.com/search?url=";
        }
        url += encodeURIComponent(info.srcUrl);
        //(console.log("finished url");)
        if (info.parentMenuItemId == "current_tab") {
            chrome.tabs.update({ "url": url });
        }
        else if (info.parentMenuItemId == "new_tab") {
            chrome.tabs.create({ "url": url, "active": Boolean(localStorage["is_focussed"]) });
        }
	}
);

chrome.runtime.onInstalled.addListener
(
	function()
	{
        chrome.contextMenus.create({ "id": "current_tab", "title": "Open in current", "contexts": ["image"] });
        chrome.contextMenus.create({ "id": "new_tab", "title": "Open in new", "contexts": ["image"] });
        //(console.log("added parents");)
		chrome.contextMenus.create({ "id": "iqdb_current", "title": "IQDB", "contexts": ["image"], "parentId": "current_tab" });
        chrome.contextMenus.create({ "id": "iqdb_new", "title": "IQDB", "contexts": ["image"], "parentId": "new_tab" });
        chrome.contextMenus.create({ "id": "tineye_current", "title": "TinEye", "contexts": ["image"], "parentId": "current_tab" });
        chrome.contextMenus.create({ "id": "tineye_new", "title": "TinEye", "contexts": ["image"], "parentId": "new_tab" });
        //(console.log("added children");)
	}
);
