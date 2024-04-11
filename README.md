# Twitter Filter Lifter Extension (Unofficial)

## Installation Instructions

1. Get the latest version from the [releases](https://github.com/theyoostink/twitter-filter-lifter/releases) page and download the `Source code (zip)` from the latest release under Assets. The contents of that zip should have `background.js`, `content.js`, `popup.html`, `popup.js`, and `manifest.json` at minimum.
2. Open your browser's `Manage Extensions` page. For example, Google Chrome's page is `chrome://extensions/` which you can enter in the Google Chrome address bar.
3. Load the extension by clicking on the `Load unpacked` button on the top left.
4. Select the folder from Step 1 that holds `background.js`, `content.js`, `popup.html`, `popup.js`, and `manifest.json`.
5. The extension should now be loaded into your browser. Make sure the extension is enabled.
6. Visit Twitter, open a profile's Media tab, open up the Twitter Filter Lifter from the Extensions icon, click the button on the extension popup, and lift those pesky sensitive content filters!
7. You can manage the extension like any other extension. You can disable and remove the extension as needed.
8. To update to the latest version of the extension, remove/delete the extension and repeat the steps starting with Step 1 using the latest version of the code.

## About the Extension

This extension only clicks on the specific "Show" span within a specific div in the Media tab of Twitter profiles using JavaScript. It only looks at the active tab in the current browser window and checks the URL to make sure the button is only enabled on the Media tab of Twitter profiles. Make sure the page is wider than 616px. That's just the number. I don't know why. It is what it is.

If you encounter a bug or would like to request changes, please contact Yoostink.

There are currently no plans to publish this extension to the Google Web Store.

## Changelog

- v1.0 [2024-04-07]: The first version
- v1.1 [2024-04-07]: Automatically lift the filters every half second when triggered
	- v1.1.1 [2024-04-07]: Minor text adjustments and code fixes
- v1.2 [2024-04-11]: Lift filters in the home feed as well