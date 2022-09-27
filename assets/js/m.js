const colors = ["#0B3954", "#BFD7EA", "#FF6663", "#E0FF4F", "#FEFFFE"];
var item1 = colors[Math.floor(Math.random() * colors.length)];
var item2 = colors[Math.floor(Math.random() * colors.length)];

var body = document.getElementById("gradient");

body.style.background = "linear-gradient(90deg, "+item1+", "+item2+")";
