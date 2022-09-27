const colors = ["#0B3954", "#BFD7EA", "#FF6663", "#E0FF4F", "#FEFFFE"];
var item1 = colors[Math.floor(Math.random() * colors.length)];
var item2 = colors[Math.floor(Math.random() * colors.length)];

var body = document.getElementById("header");
var body0 = document.getElementById("header0");

body.style.background = "linear-gradient(90deg, "+item1+", "+item2+")";
body0.style.background = "linear-gradient(90deg, "+item1+", "+item2+")";
function scroll() {
  document.body.style.scrollbarBaseColor = item2;
}
setInterval(“scroll()”, 1000)
