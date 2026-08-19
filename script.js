"use strict";

const baseBg = document.querySelector(".base-bg");
const animBg = document.querySelector(".anim-bg");
const titleElem = document.querySelector(".content-wrapper .name");
const desElem = document.querySelector(".content-wrapper .des");
const seeMoreLink = document.querySelector(".seeMore");
const slide = document.querySelector(".slide");
const container = document.querySelector(".container");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let isAnimating = false;

function getActiveItem() {
  return slide.querySelector(".item");
}

function updateContent(name, des, link) {
  titleElem.textContent = name;
  desElem.textContent = des;
  if (link) seeMoreLink.href = link;

  titleElem.style.animation = "none";
  desElem.style.animation = "none";
  void titleElem.offsetWidth;
  titleElem.style.animation = "";
  desElem.style.animation = "";
}

// Inicialização com a 1ª miniatura
const firstItem = getActiveItem();
baseBg.style.backgroundImage = `url('${firstItem.dataset.img}')`;
updateContent(firstItem.dataset.name, firstItem.dataset.des, firstItem.dataset.link);

function handleNext() {
  if (isAnimating) return;
  isAnimating = true;

  const items = slide.querySelectorAll(".item");
  const currentImg = items[0].dataset.img;
  const nextItem = items[1];
  const nextImg = nextItem.dataset.img;

  baseBg.style.backgroundImage = `url('${currentImg}')`;

  animBg.style.backgroundImage = `url('${nextImg}')`;
  animBg.className = "bg-layer anim-bg animating-expand";

  slide.appendChild(items[0]);
  updateContent(nextItem.dataset.name, nextItem.dataset.des, nextItem.dataset.link);

  setTimeout(() => {
    baseBg.style.backgroundImage = `url('${nextImg}')`;
    animBg.className = "bg-layer anim-bg";
    isAnimating = false;
  }, 700);
}

function handlePrev() {
  if (isAnimating) return;
  isAnimating = true;

  const items = slide.querySelectorAll(".item");
  const currentImg = items[0].dataset.img;
  const prevItem = items[items.length - 1];
  const prevImg = prevItem.dataset.img;

  baseBg.style.backgroundImage = `url('${prevImg}')`;

  animBg.style.backgroundImage = `url('${currentImg}')`;
  animBg.className = "bg-layer anim-bg animating-shrink";

  slide.prepend(prevItem);
  updateContent(prevItem.dataset.name, prevItem.dataset.des, prevItem.dataset.link);

  setTimeout(() => {
    animBg.className = "bg-layer anim-bg";
    isAnimating = false;
  }, 700);
}

nextBtn.addEventListener("click", (e) => {
  handleNext();
  e.currentTarget.blur();
});

prevBtn.addEventListener("click", (e) => {
  handlePrev();
  e.currentTarget.blur();
});

// Suporte a Touch e Swipe (Mobile & Mouse)
let startX = 0;
let endX = 0;
let isDragging = false;
const minSwipeDistance = 50;

container.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
}, { passive: true });

container.addEventListener("touchend", (e) => {
  endX = e.changedTouches[0].clientX;
  handleSwipe();
}, { passive: true });

container.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.clientX;
});

window.addEventListener("mouseup", (e) => {
  if (!isDragging) return;
  isDragging = false;
  endX = e.clientX;
  handleSwipe();
});

function handleSwipe() {
  const diffX = endX - startX;
  if (Math.abs(diffX) > minSwipeDistance) {
    if (diffX < 0) {
      handleNext();
    } else {
      handlePrev();
    }
  }
}