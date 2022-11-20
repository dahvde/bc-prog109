var mybutton = document.querySelector("button");
var colorInput = document.getElementById("color-input");
var rangeInput = document.getElementById("range-input");

var color = "black";
var size = 8;

mybutton.addEventListener("click", function (event) {
  var element = document.getElementsByClassName("dot");
  for (index = element.length - 1; index >= 0; index--) {
    element[index].parentNode.removeChild(element[index]);
  }

  // Let us stop the propagation of events

  event.stopPropagation();
});

colorInput.addEventListener("change", function (event) {
  color = event.target.value;
});

colorInput.addEventListener("click", (event) => {
  event.stopPropagation();
});

rangeInput.addEventListener("click", function (event) {
  event.stopPropagation();
});

rangeInput.addEventListener("change", function (event) {
  size = event.target.value;
});

addEventListener("click", function (event) {
  var dot = document.createElement("div");
  dot.className = "dot";
  dot.style.left = event.pageX - 4 + "px";
  dot.style.top = event.pageY - 4 + "px";
  dot.style.width = size + "px";
  dot.style.height = size + "px";
  dot.style.backgroundColor = color;
  document.body.appendChild(dot);
});
