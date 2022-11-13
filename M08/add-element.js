class groceryItem {
  static count = 0;

  constructor(name) {
    this.id = groceryItem.count++;
    this.name = name;
    this.elem = document.createElement("li");
    this.elem.id = this.id;

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

let listItems = {
  0: new groceryItem("<em>fresh</em> figs"),
  1: new groceryItem("pine nuts"),
  2: new groceryItem("honey"),
  3: new groceryItem("balsalmic vinegar"),
  4: new groceryItem("quinoa"),
};

document.getElementById("submit").addEventListener("click", () => {
  try {
    const name = document.getElementById("input-text");
    if (!name.value.length) throw "No input field";
    const newGroceryItem = new groceryItem(name.value);
    listItems[newGroceryItem.id] = newGroceryItem;
  } catch (err) {
    const errElem = document.getElementById("error");
    errElem.innerHTML = err;
    errElem.style.opacity = "100%";
    setTimeout(() => {
      errElem.style.opacity = "0%";
    }, 2000);
  }
});
