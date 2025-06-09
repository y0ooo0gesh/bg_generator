var css = document.querySelector("h4");
var color1 = document.querySelector(".col1");
var color2 = document.querySelector(".col2");
var body = document.querySelector("#grad");
function gradAlter() {
  body.style.background = "linear-gradient(45deg," + color1.value + "," + color2.value + ")";
  css.textContent = body.style.background + ";";
}
c1.addEventListener("input", gradAlter);
c2.addEventListener("input", gradAlter);