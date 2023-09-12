const sliderItems = document.querySelectorAll(".slider-item");
const sliderLine = document.querySelector(".slider-line");
const sliderDots = document.querySelectorAll(".slider-dot");
const sliderPrev = document.querySelector(".slider-prev");
const sliderNext = document.querySelector(".slider-next");
const pageHeader = document.querySelector(".page-header");
const mobileLinkMenu = document.querySelectorAll(".mobile-menu__link");
const mobileMenu = document.getElementById("menu-switch");

let sliderCount = 0;
let sliderWidth;

// Чувствует каждое изменение экрана
window.addEventListener("resize", showSlide);

sliderNext.addEventListener("click", nextSlide);
sliderPrev.addEventListener("click", prevSlide);

function showSlide() {
  sliderWidth = document.querySelector(".slider").offsetWidth;
  sliderLine.style.width = sliderWidth * sliderItems.length + "px";
  sliderItems.forEach((item) => (item.style.width = sliderWidth + "px"));

  rollSlider();
}
showSlide();

// Листает слайды назад при клике на кнопку
function prevSlide() {
  sliderCount--;
  if (sliderCount < 0) {
    sliderCount = sliderItems.length - 1;
  }

  rollSlider();
  thisSlide(sliderCount);
}

// Листает слайды вперед при клике на кнопку
function nextSlide() {
  sliderCount++;
  if (sliderCount >= sliderItems.length) {
    sliderCount = 0;
  }

  rollSlider();
  thisSlide(sliderCount);
}

// Задает шаг перемещение слайдов
function rollSlider() {
  sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}

// Указывает какой слайд по счету активный
function thisSlide(index) {
  sliderDots.forEach((item) => item.classList.remove("active-dot"));
  sliderDots[index].classList.add("active-dot");
}

// Клик на dot
sliderDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    sliderCount = index;
    rollSlider();
    thisSlide(sliderCount);
  });
});


window.addEventListener("scroll", function () {
  const scrollPos = window.scrollY;
  console.log(scrollPos);
  if (scrollPos > 100) {
    pageHeader.classList.add("page-header_scroll");
  } else {
    pageHeader.classList.remove("page-header_scroll");
  }
});

function closeMenu (links) {
  links.forEach((el) => {
    el.addEventListener('click', () => {
      mobileMenu.checked = false;
    });
  });
}
closeMenu(mobileLinkMenu);