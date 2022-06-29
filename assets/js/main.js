function submit() {
	// const request = new XMLHttpRequest();
	// request.open("POST", "https://discord.com/api/webhooks/991790746422218832/Q3CBZ86DJYgFN_fkqfPMlUN1c377aZoZ0YfP2vyFPHCSwDWAaWVduHarz2zeCpGGsOLb")
	// request.setRequestHeader("Content-type", "application/json");
	var url_string = window.location.href;
	var url = new URL(url_string);
	const code = url.searchParams.get("code");

	console.log(code);
}
