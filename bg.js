var css = document.querySelector("h4");
var color1 = document.querySelector(".col1");
var color2 = document.querySelector(".col2");
var color3 = document.querySelector(".col3");
var body = document.querySelector("#grad");
function gradientAlterer() {
  body.style.background = 
    "linear-gradient(111deg," + color1.value +", transparent), " +
    "linear-gradient(222deg," + color2.value +", transparent), " +
    "linear-gradient(333deg," + color3.value +", transparent) " ;
  css.textContent = body.style.background + ";";
}
color1.addEventListener("input", gradientAlterer);
color2.addEventListener("input", gradientAlterer);
color3.addEventListener("input", gradientAlterer);