// Create a new element and store it in a variable.
var newEl = document.createElement("li");

// Create a text node and store it in a variable.
var newText = document.createTextNode("quinoa");

// Attach the new text node to the new element.
newEl.appendChild(newText);

// Find the position where the new element should be added.
var position = document.getElementsByTagName("ul")[0];

// Insert the new element into its position.
position.appendChild(newEl);

class groceryItem {
  constructor(name) {
    this.name = name;
    this.elem = document.createElement("li");

    this.setName(name);
    document.getElementsByTagName("ul")[0].appendChild(this.elem);
  }

  updateElem() {
    this.elem.innerHTML = this.name;
  }

  setName(name) {
    this.name = name;
    this.updateElem();
  }
}

document.getElementById("submit").addEventListener("click", () => {
  try {
    const name = document.getElementById("input-text");
    if (!name.value.length) throw "No input field";
    console.log(name.value);
    new groceryItem(name.value);
  } catch (err) {
    console.log(err);
  }
});
