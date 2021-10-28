"use strict";

import * as menu from "./menu.js";
menu.hamburger.addEventListener("click", menu.toggleHamburger);
window.addEventListener("click", menu.hideMenuByClickOnBody);

import * as Explore from "./explore.js";
let mousedown = false;
window.addEventListener("mousemove", (e) => {
    e.preventDefault(); 
    if (mousedown) 
        Explore.moveSlider(e)
});
Explore.slider.addEventListener("mousedown", () => (mousedown = true));
window.addEventListener("mouseup", () => (mousedown = false));
Explore.slider.addEventListener("touchstart", () => (mousedown = true));
window.addEventListener("touchmove", (e) => {
    e.preventDefault(); 
    if (mousedown)
        Explore.moveSlider(e.changedTouches[0])
});
window.addEventListener("touchend", () => (mousedown = false));

import * as iframe from "./iframe.js";
iframe.findVideos();

import * as Video from "./video.js";
Video.videoBar.addEventListener("input", (e) => Video.changeProgress(e, 1));
Video.volumeBar.addEventListener("input", (e) => Video.changeProgress(e, 100));
Video.video.addEventListener("click", Video.togglePlay);
Video.video.addEventListener("ended", Video.endingVideo);
Video.video.addEventListener("timeupdate", Video.updateBar);
Video.playButton.addEventListener("click", Video.togglePlay);
Video.volumeBar.addEventListener("change", Video.changeVolume);
Video.volumeBar.addEventListener("mousemove", Video.changeVolume);
Video.volumeButton.addEventListener("click", Video.muteSound);
Video.smallPlayButton.addEventListener("click", Video.togglePlay);
Video.fullscreenButton.addEventListener("click", Video.toggleScreen);
Video.videoBar.addEventListener("click", Video.changeVideoTime);
Video.videoBar.addEventListener(
  "mousemove",
  (e) => mousedown && Video.changeVideoTime(e)
);
Video.videoBar.addEventListener("mousedown", () => (mousedown = true));
Video.videoBar.addEventListener("mouseup", () => (mousedown = false));
window.addEventListener("load", Video.observeKeyCode);

import * as Select from "./select.js";
Select.typeSelect.addEventListener("focus", () =>
  Select.changeOnFocus(
    Select.typeSelect,
    Select.typeSelectTitle,
    3,
    Select.typeSelectContainer
  )
);
Select.typeSelect.addEventListener("blur", () =>
  Select.changeOnBlur(
    Select.typeSelect,
    Select.typeSelectTitle,
    Select.typeSelectContainer,
    form.formTicketType
  )
);
Select.typeSelect.addEventListener("blur", Select.changePriceByType);
Select.typeSelect.addEventListener("change", () =>
  Select.chooseOption(
    Select.typeSelect,
    Select.typeSelectTitle,
    Select.typeSelectContainer
  )
);
window.addEventListener("click", (e) =>
  Select.defaultSelectBackground(e, Select.typeSelectContainer)
);
Select.timeSelect.addEventListener("focus", () =>
  Select.changeOnFocus(
    Select.timeSelect,
    Select.timeSelectTitle,
    19,
    Select.timeSelectContainer
  )
);
Select.timeSelect.addEventListener("blur", () =>
  Select.changeOnBlur(
    Select.timeSelect,
    Select.timeSelectTitle,
    Select.timeSelectContainer,
    form.formTicketTime
  )
);
Select.timeSelect.addEventListener("change", () =>
  Select.chooseOption(
    Select.timeSelect,
    Select.timeSelectTitle,
    Select.timeSelectContainer
  )
);
window.addEventListener("click", (e) =>
  Select.defaultSelectBackground(e, Select.timeSelectContainer)
);

import * as Gallery from "./gallery.js";
Gallery.gallery.innerHTML = "";
Gallery.shuffle(Gallery.images).map(
  (img) => (Gallery.gallery.innerHTML += img)
);
window.addEventListener("scroll", Gallery.slideOn);
window.addEventListener("load", Gallery.slideOn);

import * as Tickets from "./tickets.js";
Tickets.amountContainer.addEventListener("click", (e) =>
  Tickets.increaseAmount(e)
);
Tickets.basicPrice.addEventListener("focus", () => Tickets.removeWarning());
Tickets.seniorPrice.addEventListener("focus", () => Tickets.removeWarning());
Tickets.basicPrice.addEventListener("blur", function () {
  Tickets.validatePrice(this);
});
Tickets.seniorPrice.addEventListener("blur", function () {
  Tickets.validatePrice(this);
});
Tickets.basicPrice.addEventListener("input", () => Tickets.populateStorage);
Tickets.seniorPrice.addEventListener("input", () => Tickets.populateStorage);
Tickets.setStylesFromStorage();

import * as form from "./form.js";
form.form.addEventListener("click", (e) => Tickets.increaseAmount(e));
form.ticketsBuyButton.addEventListener("click", form.showForm);
form.ticketsBuyButton.addEventListener(
  "click",
  form.updateDataOnFormFromTickets
);
form.ticketsBuyButton.addEventListener("click", form.updateSelect);
form.closingForm.addEventListener("click", form.showForm);
form.overlay.addEventListener("click", form.showForm);
form.bookButton.addEventListener("click", form.showRipple);
form.date.addEventListener("focus", form.activeTiming);
form.dateInput.addEventListener("change", form.changeDate);
form.dateInput.addEventListener("focus", () => {
  Tickets.removeWarning();
  form.dateInput.style.border = "1px solid #030303";
});
form.phoneInput.addEventListener("focus", () => {
  Tickets.removeWarning();
  form.phoneInput.style.border = "1px solid #030303";
});
form.nameInput.addEventListener("focus", () => {
  Tickets.removeWarning();
  form.nameInput.style.border = "1px solid #030303";
});
form.emailInput.addEventListener("focus", () => {
  Tickets.removeWarning();
  form.emailInput.style.border = "1px solid #030303";
});
form.dateInput.addEventListener("blur", () => {
  form.validateDate(form.dateInput);
});
form.phoneInput.addEventListener("blur", () => {
  form.validatePhone(form.phoneInput);
});
form.nameInput.addEventListener("blur", () =>
  form.validateInput(form.nameInput)
);
form.emailInput.addEventListener("blur", () =>
  form.validateInput(form.emailInput)
);

import * as Welcome from "./welcome.js";
Welcome.welcomeSlider.cloneAppend(0);
Welcome.welcomeSlider.clonePrepend(1);
Welcome.welcomeSliderContainer.addEventListener("transitionstart", () => {
  Welcome.welcomeSlider.enableSliding();
});
Welcome.welcomeSliderContainer.addEventListener("transitionend", () => {
  Welcome.welcomeSlider.enableSliding();
  Welcome.welcomeSliderContainer.classList.remove("transition-slider");
});
Welcome.welcomeBulletsContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("slide__bullet"))
    Welcome.welcomeSlider.slideElements(
      Number(e.target.dataset.count),
      Welcome.welcomeSlider
    );
});

Welcome.welcomeArrows[0].addEventListener("click", () => {
  if (Welcome.welcomeSlider.isEnabled)
    Welcome.welcomeSlider.slideElements(
      Welcome.welcomeSlider.currentSlide - 1
    );
});
Welcome.welcomeArrows[1].addEventListener("click", () => {
  if (Welcome.welcomeSlider.isEnabled)
    Welcome.welcomeSlider.slideElements(
      Welcome.welcomeSlider.currentSlide + 1
    );
});
Welcome.welcomeSlider.swipeDetect(Welcome.welcomeSliderContainer);

Welcome.videoSlider.cloneAppend(0);
Welcome.videoSlider.cloneAppend(1);
Welcome.videoSlider.cloneAppend(2);
Welcome.videoSlider.clonePrepend(1);
window.addEventListener('load', checkWindow);
window.addEventListener('resize', checkWindow);
function checkWindow() {
    if (document.documentElement.clientWidth <= 420) {
        Welcome.videoSlider.transformPercent = 55;
    }
    else if (document.documentElement.clientWidth <= 768) {
        Welcome.videoSlider.transformPercent = 51;
    }
    else {
        Welcome.videoSlider.transformPercent = 35;
    }
    Welcome.videoSliderContainer.style.transform = `translate(${
      -Welcome.videoSlider.transformPercent * Welcome.videoSlider.currentSlide
    }%, 0)`;
}
Welcome.videoSliderContainer.addEventListener("transitionstart", () => {
  Welcome.videoSlider.enableSliding();
});
Welcome.videoSliderContainer.addEventListener("transitionend", () => {
  Welcome.videoSlider.enableSliding();
  Welcome.videoSliderContainer.classList.remove("transition-slider");
});
Welcome.videoBulletsContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("video-slider__slide")) {
    Welcome.videoSlider.slideElements(
      Number(e.target.dataset.count)
    );
    }
});
Welcome.videoSlider.swipeDetect(Welcome.videoSliderContainer);

Welcome.videoArrows[0].addEventListener("click", () => {
  if (Welcome.videoSlider.isEnabled) {
    Welcome.videoSlider.slideElements(Welcome.videoSlider.currentSlide - 1);
  }
});
Welcome.videoArrows[1].addEventListener("click", () => {
  if (Welcome.videoSlider.isEnabled) {
    Welcome.videoSlider.slideElements(Welcome.videoSlider.currentSlide + 1);
  }
});

import * as map from "./map.js";

console.log(`
при клике по самому слайду или кнопке Play в центре слайда, внутри слайда проигрывается видео с YouTube. Никакие изменения с основным видео при этом не происходят +2
Кастомный видеоплеер +36
Слайдер сравнения изображений в секции Explore +10
Калькулятор продажи билетов в секции Tiskets +10
Калькулятор продажи билетов в форме продажи билетов +14
Валидация формы +16
Интерактивная карта в секции Contacts +12
Анимация при прокрутке изображений в секции Galery +8
Итого 108/160 баллов
`);
