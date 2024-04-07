chrome.runtime.onMessage.addListener(function(request, sender, response) {
	if (request.message == "lift filters") {
		var interval = 1000 * 0.5;
		setInterval(liftFilters, interval);
	}
});

function liftFilters() {
	// Looks for the specific "Show" span within a specific div and then clicks on all of the ones in view
	document.querySelectorAll(
		"div.css-1rynq56.r-bcqeeo.r-qvutc0.r-37j5jr.r-a023e6.r-rjixqe.r-16dba41.r-1loqt21 > span.css-1qaijid.r-bcqeeo.r-qvutc0.r-poiln3"
	).forEach(function (currentValue, currentIndex, listObj) {
		currentValue.click();
	});
}