var delay;
var element = document.body;
var checkBoxes = document.getElementsByClassName("checkmark");

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
        return `<p class="transition">${e}</p>`;
      })
      .join("");

    if (i > 0) {
      row =
        "<div class='rhombusRow' >" +
        `<p class='transition'>${fillerSymbol.repeat(i)}</p>` +
        "<div class='rhombusContent' color-value='red'>" +
        row +
        "</div>" +
        `<p class='transition'>${fillerSymbol.repeat(i)}</p>` +
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
    .concat([...rhombus].reverse().splice(1, rhombus.length))
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

  saveColor();
}

// add delay to the rhombus creation on input change
document.getElementById("rHeight").addEventListener("input", function () {
  clearTimeout(delay);
  if (this.value >= 130) this.value = 130;
  if (this.value < 0) this.value = 1;
  delay = setTimeout(function () {
    createRhombus();
  }, 200);
});

function toggleColorMode() {
  const colorToggle = document.querySelector("#colorToggle > img");

  // init color mode
  if (localStorage.getItem("colorMode") === "light") {
    localStorage.setItem("colorMode", "dark");
    document.body.classList.toggle("dark-mode");
    colorToggle.setAttribute("src", "./images/sun.svg");
    colorToggle.setAttribute("alt", "sun");
  } else {
    localStorage.setItem("colorMode", "light");
    document.body.classList.toggle("dark-mode");
    colorToggle.setAttribute("src", "./images/moon.svg");
    colorToggle.setAttribute("alt", "moon");
  }
}

function initLocalStorageItems() {
  const colorEven = document.getElementById("colorEven");
  const colorOdd = document.getElementById("colorOdd");
  const colorEvenValue = localStorage.getItem("colorEven");
  const colorOddValue = localStorage.getItem("colorOdd");

  if (localStorage.getItem("colorMode") === "light") {
    document
      .querySelector("#colorToggle > img")
      .setAttribute("src", "./images/moon.svg");
  } else {
    document.body.classList.add("dark-mode");
    document
      .querySelector("#colorToggle > img")
      .setAttribute("src", "./images/sun.svg");
  }
  if (colorEvenValue) {
    colorEven.value = colorEvenValue;
  } else {
    saveColor();
  }
  if (colorOddValue) {
    colorOdd.value = colorOddValue;
  } else {
    saveColor();
  }
}

function saveColor() {
  const colorEven = document.getElementById("colorEven");
  const colorOdd = document.getElementById("colorOdd");

  localStorage.setItem("colorEven", colorEven.value);

  localStorage.setItem("colorOdd", colorOdd.value);
}

// init transition on page load
function initTranstion() {
  const colorButton = document.getElementById("colorToggle");
  const sidebar = document.getElementById("input-wrapper");

  setTimeout(() => {
    colorButton.classList.add("transition");
    sidebar.classList.add("transition");
    document.body.classList.add("transition");
  }, 1000);
}

Array.from({ length: checkBoxes.length }).forEach((e, i) => {
  checkBoxes[i].addEventListener("click", (e) => {
    const inputBox = e.target.parentElement.parentElement.children[1];
    const checked = inputBox.getAttribute("checked");
    const rhombus = document.getElementById("rhombus");
    let $Attr;

    if (inputBox.id.length) {
      $Attr = "hide" + firstLetterToUpperCase(inputBox.id.split("-")[1]);
    }

    if (checked != null) {
      inputBox.removeAttribute("checked");
      rhombus.classList.add($Attr);
      // Lock hidden class to single element
      if (e.target.tagName == "IMG") {
        e.target.classList.add("hidden");
      }
    } else {
      inputBox.setAttribute("checked", true);
      rhombus.classList.remove($Attr);
      // Lock hidden class to single element
      if (e.target.tagName == "IMG") {
        e.target.classList.remove("hidden");
      }
    }
  });
});

function firstLetterToUpperCase(string) {
  return string[0].toUpperCase() + string.slice(1);
}

initTranstion();
initLocalStorageItems();
createRhombus();
