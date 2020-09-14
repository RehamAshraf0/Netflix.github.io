// Selectors
const tabs = document.querySelectorAll(".tab");
const tabItems = Array.from(tabs);
const slides = document.querySelectorAll(".slide");
const slideItems = Array.from(slides);
//Event Listeners

tabItems.forEach((tab) => tab.addEventListener("click", active));

//Functions

function removeBorderandShow(e) {
  tabItems.forEach((tab) => tab.classList.remove("show"));
  slideItems.forEach((slide) => slide.classList.remove("show-content"));
}

function active(e) {
  removeBorderandShow();
  this.classList.add("show");
  let active = document.querySelector(`#${this.id}-content`);
  active.classList.add("show-content");
}
