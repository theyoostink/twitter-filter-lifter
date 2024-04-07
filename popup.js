document.addEventListener("DOMContentLoaded", function() {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		// Disable the button if not in a URL that is the Media tab on a Twitter profile
		var tabURL = tabs[0].url;
		if (tabURL && ((tabURL.includes("twitter.com") || tabURL.includes("x.com")) && tabURL.includes("/media"))) {
			document.getElementById("lift-filters-button").disabled = false;
			document.getElementById("lift-filters-button").innerHTML = "Lift All Filters in View";
		}
		else {
			document.getElementById("lift-filters-button").disabled = true;
			document.getElementById("lift-filters-button").innerHTML = "DISABLED";
		}
	});
});

document.getElementById("lift-filters-button").addEventListener("click", function() {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, { message: "lift filters" });
	});
});