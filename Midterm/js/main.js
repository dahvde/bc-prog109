// Toggles input label visibility depending on whether the input has a value
function toggleInputFilled(e) {
  if (e.value) {
    e.setAttribute("filled", "");
  } else {
    e.removeAttribute("filled");
  }
}

highlightCurrentPage();
