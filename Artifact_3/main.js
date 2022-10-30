var delay;
var element = document.body;

// default dark mode
element.classList.toggle("dark-mode");

// create rhombus to display in the dom
function createRhombus() {
  // Set root properties
  setColor();

  const height = document.getElementById("rHeight").value;
  const colorOdd = document.getElementById("colorOdd").value;
  const symbol = document.getElementById("symbol").value.repeat(2);

  var fillerSymbol = "_";

  var rhombus = [];

  for (var i = 0; i < height; i++) {
    var row = symbol
      .repeat(height - i)
      .split("")
      .map((e) => {
        return `<p colorValue="rgb(112, 126, 251)">${e}</p>`;
      })
      .join("");

    if (i > 0) {
      row =
        "<div class='rhombusRow' >" +
        `<p>${fillerSymbol.repeat(i)}</p>` +
        "<div class='rhombusContent' color-value='red'>" +
        row +
        "</div>" +
        `<p>${fillerSymbol.repeat(i)}</p>` +
        "</div>";
    } else {
      row =
        "<div class='rhombusRow'>" +
        `<div class='rhombusContent'>${row}</div>` +
        "</div>";
    }
    rhombus.push(row);
  }

  document.getElementById("rhombus").innerHTML = rhombus
    .reverse()
    .concat([...rhombus].reverse())
    .join("<br>");
}

function setColor() {
  // set root properties
  let root = document.documentElement;

  root.style.setProperty(
    "--color-even",
    document.getElementById("colorEven").value
  );
  root.style.setProperty(
    "--color-odd",
    document.getElementById("colorOdd").value
  );
}

// add delay to the rhombus creation on input change
document.getElementById("rHeight").addEventListener("input", function () {
  clearTimeout(delay);
  delay = setTimeout(function () {
    createRhombus();
  }, 200);
});

function toggleColorMode() {
  if (element.classList[0] == "light-mode") {
    element.classList.toggle("light-mode");
  } else {
    element.classList.toggle("dark-mode");
  }
}

createRhombus();
