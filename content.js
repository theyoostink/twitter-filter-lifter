onload = function() {
	chrome.storage.sync.get("lift_filters_enabled", function(res) {

		// On first load, set the state to enabled and trigger the lift filters
		if (!("lift_filters_enabled" in res)) {
			chrome.storage.sync.set({"lift_filters_enabled": true});
			chrome.runtime.sendMessage({message: "update toggle popup"});
			repeatLiftFilters();
		}
		else {
			// Trigger lift filters if enabled
			if (res["lift_filters_enabled"]) {
				repeatLiftFilters();
			}
		}
	});
};

chrome.runtime.onMessage.addListener(function(request, sender, response) {
	if (request.message == "toggle lift filters") {
		chrome.storage.sync.get("lift_filters_enabled", function(res) {
			// Set the state to the opposite of what it is currently
			var enabled = true;

			if ("lift_filters_enabled" in res) {
				enabled = res["lift_filters_enabled"];
			}
			enabled = !enabled;
			chrome.storage.sync.set({"lift_filters_enabled": enabled});

			// Tell the popup to update its button so that the change shows up immediately
			chrome.runtime.sendMessage({message: "update toggle popup"});

			// Trigger the lift filters repeater
			if (enabled) {
				repeatLiftFilters();
			}
		});
	}
});

function repeatLiftFilters() {
	// Only trigger the lift filters function on repeat if the URL is valid
	var tabURL = window.location.href;
	if (tabURL && ((tabURL.includes("twitter.com") || tabURL.includes("x.com")) && (tabURL.includes("/media") || tabURL.includes("/home")))) {
		var interval = 1000 * 0.5;
		setInterval(liftFilters, interval);
	}
}

function liftFilters() {
	// MEDIA TAB
	// Looks for the specific "Show" span within a specific div and then clicks on all of the ones in view
	document.querySelectorAll(
		"div.css-1rynq56.r-bcqeeo.r-qvutc0.r-37j5jr.r-a023e6.r-rjixqe.r-16dba41.r-1loqt21 > span.css-1qaijid.r-bcqeeo.r-qvutc0.r-poiln3"
	).forEach(function (currentValue, currentIndex, listObj) {
		currentValue.click();
	});

	// HOME FEED
	// Looks for the specific "Show" div within a specific div and then clicks on all of the ones in view
	document.querySelectorAll(
		"div.css-175oi2r.r-1kihuf0.r-1e081e0 > div[role=button]"
	).forEach(function (currentValue, currentIndex, listObj) {
		currentValue.click();
	});
}