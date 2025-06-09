var css = document.querySelector("h4");
var c1 = document.querySelector(".col1");
var c2 = document.querySelector(".col2");
var body = document.querySelector("#grad");
function gradAlter() {
  body.style.background = "linear-gradient(45deg," + c1.value + "," + c2.value + ")";
  css.textContent = body.style.background + ";";
}
c1.addEventListener("input", gradAlter);
c2.addEventListener("input", gradAlter);