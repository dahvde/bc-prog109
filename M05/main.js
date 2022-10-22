var table = handleInput(prompt("Input value 1-10")); // Parses the input to an integer
var msg = "<h2>Multiplication table</h2>"; // Message

// Checks if the input is valid
function handleInput(i) {
  try {
    if (i == null) return 1; // If the user clicks cancel, return 1
    i = parseInt(i);
    if (isNaN(i)) throw "Not a number";
    if (i < 1) throw "Too small";
    if (i > 10) throw "Too large";
  } catch (err) {
    i = handleInput(prompt(`${err}. Input value 1-10`));
  }
  return parseInt(i);
}

// Creates the table
for (var i = 1; i < 11; i++) {
  msg += `${i} x ${table} = ${i * table} <br />`;
}

// Writes the message into the page
var el = document.getElementById("blackboard");
el.innerHTML = `<div>${msg}</div>`;

// Waits to trigger animation
setTimeout(() => {
  const child = el.children[0];
  child.style.opacity = "100%";
  child.style.transform = "scale(100%) translateY(0)";
}, 100);
