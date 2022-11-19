const colors = [["C2AFF0", "9191E9", "457EAC"], ["02C39A", "00A896", "028090", "05668D"], ["D3C4E3", "8F95D3", "89DAFF"]];

var url = new URL(window.location.href);
function translate_params() {
   var color1 = url.searchParams.get("c1");
   var color2 = url.searchParams.get("c2");

   var body0 = document.getElementById("header0");
   body0.style.background = "linear-gradient(90deg, #"+color1+", #"+color2+")";
   
   window.history.pushState({}, document.title, window.location.pathname);   
}

if ([null, undefined].includes(url.searchParams.get("c1")) || [null, undefined].includes(url.searchParams.get("c2"))) {
   var random = Math.floor(Math.random() * colors.length)
   var color1 = colors[random][Math.floor(Math.random() * colors[random].length)];
   var color2 = colors[random][Math.floor(Math.random() * colors[random].length)];
} else {
   translate_params();
}
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

function translate_link_switch_en() {
   document.getElementById("docs").style.display = "block";
   document.getElementById("docs-w").style.opacity = "1";
}
