import * as menu from "./menu.js";
menu.hamburger.addEventListener("click", menu.toggleHamburger);
window.addEventListener("click", menu.hideMenuByClickOnBody);

import * as Explore from "./explore.js";
let mousedown = false;
window.addEventListener("mousemove", (e) => mousedown && Explore.moveSlider(e));
Explore.slider.addEventListener("mousedown", () => (mousedown = true));
window.addEventListener("mouseup", () => (mousedown = false));



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
window.addEventListener('load', Video.observeKeyCode)

import * as Select from "./select.js";
Select.typeSelect.addEventListener("focus", () => Select.changeOnFocus(Select.typeSelect, Select.typeSelectTitle, 3, Select.typeSelectContainer));
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
window.addEventListener("click", (e) => Select.defaultSelectBackground(e, Select.typeSelectContainer));
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
window.addEventListener(
  "click", (e) =>
  Select.defaultSelectBackground(e, Select.timeSelectContainer)
);

import * as gal from "./shuffle.js";
gal.gallery.innerHTML = "";
gal.shuffle(gal.images).map((img) => (gal.gallery.innerHTML += img));

import * as Tickets from "./tickets.js";
Tickets.amountContainer.addEventListener('click', (e) => Tickets.increaseAmount(e));
Tickets.basicPrice.addEventListener("focus", () =>
  Tickets.removeWarning()
);
Tickets.seniorPrice.addEventListener("focus", () =>
  Tickets.removeWarning()
);
Tickets.basicPrice.addEventListener('blur', () => Tickets.validatePrice.call(Tickets.basicPrice));
Tickets.seniorPrice.addEventListener(
  "blur",
  () => Tickets.validatePrice.call(Tickets.seniorPrice)
);
Tickets.basicPrice.addEventListener('input', () => Tickets.populateStorage)
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
form.dateInput.addEventListener('change', form.changeDate);
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
  form.nameInput.style.border = '1px solid #030303';
});
form.emailInput.addEventListener("focus", () =>{
  Tickets.removeWarning();
  form.emailInput.style.border = "1px solid #030303";
});
form.dateInput.addEventListener('blur', () => {
    form.validateDate(form.dateInput)
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

import * as map from "./map.js";

console.log(`
при клике по самому слайду или кнопке Play в центре слайда, внутри слайда проигрывается видео с YouTube. Никакие изменения с основным видео при этом не происходят +2
Кастомный видеоплеер +36
Слайдер сравнения изображений в секции Explore +10
Калькулятор продажи билетов в секции Tiskets +10
Калькулятор продажи билетов в форме продажи билетов +14
Валидация формы +16
Интерактивная карта в секции Contacts +12
Итого 100/160 баллов
`);