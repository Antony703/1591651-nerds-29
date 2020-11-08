const slider = document.querySelector(".slider-list");
const sliderItem1 = slider.querySelector(".slider-item-1");
const sliderItem2 = slider.querySelector(".slider-item-2");
const sliderItem3 = slider.querySelector(".slider-item-3");
const sliderButton1 = document.querySelector(".slider-controls button:first-child");
const sliderButton2 = document.querySelector(".slider-controls button:nth-child(2)");
const sliderButton3 = document.querySelector(".slider-controls button:last-child");

sliderButton1.addEventListener("click", function () {
  sliderItem1.classList.add("slide-current");
  sliderItem1.classList.remove("slide");
  sliderItem2.classList.remove("slide-current");
  sliderItem2.classList.add("slide");
  sliderItem3.classList.remove("slide-current");
  sliderItem3.classList.add("slide");
  sliderButton1.classList.add("current");
  sliderButton2.classList.remove("current");
  sliderButton3.classList.remove("current");
});
sliderButton2.addEventListener("click", function () {
  sliderItem2.classList.remove("slide");
  sliderItem2.classList.add("slide-current");

  sliderItem1.classList.remove("slide-current");
  sliderItem1.classList.add("slide");

  sliderItem3.classList.remove("slide-current");
  sliderItem3.classList.add("slide");

  sliderButton2.classList.add("current");
  sliderButton1.classList.remove("current");
  sliderButton3.classList.remove("current");
});
sliderButton3.addEventListener("click", function () {
  sliderItem3.classList.remove("slide");
  sliderItem3.classList.add("slide-current");

  sliderItem1.classList.remove("slide-current");
  sliderItem1.classList.add("slide");

  sliderItem2.classList.remove("slide-current");
  sliderItem2.classList.add("slide");

  sliderButton3.classList.add("current");
  sliderButton1.classList.remove("current");
  sliderButton2.classList.remove("current");
});
