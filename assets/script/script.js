// Start Code JavaScript
let hour = document.getElementsByClassName("hour")[0];
let minute = document.getElementsByClassName("minute")[0];
let second = document.getElementsByClassName("second")[0];
let year = document.getElementsByClassName("year")[0];
let day = document.getElementsByClassName("day")[0];
let month = document.getElementsByClassName("month")[0];
let color = document.getElementsByClassName("color-field")[0];
class Timer {
  constructor() {
    this.executeAttributes();
  }
  executeAttributes() {
    let t = new Date();
    hour.innerHTML = t.getHours();
    minute.innerHTML = t.getMinutes();
    second.innerHTML = t.getSeconds();
    year.innerHTML = t.getFullYear();
    day.innerHTML = t.getDate();
    month.innerHTML = t.getMonth();
  }
}
window.setInterval(function () {
  let objectTime = new Timer();
}, 1000);
color.addEventListener("change", changeColor);
function changeColor() {
  document.getElementsByClassName("clock")[0].style.backgroundColor =
    color.value;
  localStorage.setItem("color", color.value);
}

onload = function () {
  if (this.localStorage.getItem("color") !== null) {
    document.getElementsByClassName("clock")[0].style.backgroundColor =
      this.localStorage.getItem("color");
  }
  let objectTime = new Timer();
};
// End Code JavaScript
