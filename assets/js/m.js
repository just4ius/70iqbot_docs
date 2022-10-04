const colors = [["B7F0AD", "D2FF96", "EDFF7A", "E8D33F", "D17B0F"], ["A3320B", "D5E68D", "6B0504", "241023"], ["F0F3BD", "02C39A", "00A896", "028090", "05668D"], ["D3C4E3", "8F95D3", "89DAFF"]];

var random = Math.floor(Math.random() * colors.length)
var color1 = colors[random][Math.floor(Math.random() * colors[random].length)];
var color2 = colors[random][Math.floor(Math.random() * colors[random].length)];

var body = document.getElementById("header");
var body0 = document.getElementById("header0");

try {
  body.style.background = "linear-gradient(90deg, #"+color1+", #"+color2+")";
} catch (e) {
  if (e instanceof TypeError) {
    // pass
  }
}
body0.style.background = "linear-gradient(90deg, #"+color1+", #"+color2+")";

// setTimeout(function () {
// 	document.body.style.scrollbarBaseColor = item2;
// }, 2000);

function translate_link() {
  window.location.href = "/docs/en/?c1="+color1+"&c2="+color2;
}
