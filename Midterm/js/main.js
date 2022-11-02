// Toggles input label visibility depending on whether the input has a value
function toggleInputFilled(e) {
  if (e.value) {
    e.setAttribute("filled", "");
  } else {
    e.removeAttribute("filled");
  }
}

window.addEventListener("DOMContentLoaded", () => {
  document.body.style.setProperty("--transition", "0.2s");
});
