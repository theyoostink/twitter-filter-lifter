onload = function() {
	// Update the toggle button based on the current state
	chrome.storage.sync.get("lift_filters_enabled", function(res) {
		updateToggleButton(res["lift_filters_enabled"]);
	});
};

// Toggle the state
document.getElementById("lift-filters-button").addEventListener("click", function() {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, { message: "toggle lift filters" });
	});
});

chrome.runtime.onMessage.addListener(function(request, sender, response) {
	// Update the toggle button text based on the current state
	if (request.message == "update toggle popup") {
		chrome.storage.sync.get("lift_filters_enabled", function(res) {
			updateToggleButton(res["lift_filters_enabled"]);
		});
	}
});

function updateToggleButton(enabled) {
	var button = document.getElementById("lift-filters-button");
	if (enabled) {
		button.innerHTML = "ENABLED";
	}
	else {
		button.innerHTML = "DISABLED";
	}
}