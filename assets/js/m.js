const colors = [["9191E9", "457EAC"], ["02C39A", "00A896", "028090", "05668D"], ["89DAFF"]];

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

function translate_link_switch_en() {
   document.getElementById("docs").style.display = "block";
   setTimeout(function () {
      document.getElementById("docs-w").style.opacity = "1";
   }, 500);
   document.getElementById("docs").scrollIntoView({behavior: "smooth"})
}

if (url.searchParams.get("success") == 1) {
   document.getElementById("mainbut").style.display = "none";
   document.getElementById("done_tick").style.display = "inline";

   window.history.pushState({}, document.title, window.location.pathname);
 }

function mainbut_anim() {
   var button = document.getElementById("mainbut");
   button.style.display = "contents";
   button.innerHTML = "";
   button.classList.add("spinning");
   window.location.href = "https://id.twitch.tv/oauth2/authorize?response_type=code&client_id=wv972jdf5qimlae4sk8r19fj6vdn8w&redirect_uri=https://www.70iqbot.com/oauth&scope=channel%3Amoderate+channel%3Amanage%3Abroadcast+moderation%3Aread+moderator%3Amanage%3Abanned_users+moderator%3Aread%3Achat_settings+moderator%3Amanage%3Achat_settings+moderator%3Aread%3Achat_settings+moderator%3Amanage%3Aannouncements";
}
