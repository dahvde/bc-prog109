let next = document.getElementById("next");
let previous = document.getElementById("previous");

// Interval for slide change
var timedSwitch = setInterval(() => {
  nextSlide();
}, 3000);

// Changes slide to next slide
function nextSlide() {
  resetInterval();
  const focused = document.getElementById("focused");
  const left = document.getElementById("queue-left");
  const right = document.getElementById("queue-right");
  const leftHidden = document.getElementById("hidden-left");
  const rightHidden = document.getElementById("hidden-right");

  focused.id = "queue-left";
  right.id = "focused";
  left.id = "hidden-left";
  leftHidden.id = "hidden-right";
  rightHidden.id = "queue-right";
}

// Resets slide change interval
function resetInterval() {
  clearInterval(timedSwitch);
  timedSwitch = setInterval(() => {
    nextSlide();
  }, 3000);
}

// Changes slide to previous slide
function lastSlide() {
  resetInterval();
  const focused = document.getElementById("focused");
  const left = document.getElementById("queue-left");
  const right = document.getElementById("queue-right");
  const leftHidden = document.getElementById("hidden-left");
  const rightHidden = document.getElementById("hidden-right");

  focused.id = "queue-right";
  right.id = "hidden-right";
  left.id = "focused";
  leftHidden.id = "queue-left";
  rightHidden.id = "hidden-left";
}

next.onclick = nextSlide;

previous.onclick = lastSlide;
