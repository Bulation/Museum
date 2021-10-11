import * as menu from "./menu.js";
menu.hamburger.addEventListener("click", menu.toggleHamburger);
window.addEventListener("click", menu.hideMenuByClickOnBody);

import * as Explore from "./explore.js";
let mousedown = false;
window.addEventListener("mousemove", (e) => mousedown && Explore.moveSlider(e));
Explore.slider.addEventListener("mousedown", () => (mousedown = true));
window.addEventListener("mouseup", () => (mousedown = false));

import * as form from "./form.js";
form.ticketsBuyButton.addEventListener("click", form.showForm);
form.closingForm.addEventListener("click", form.showForm);
form.overlay.addEventListener("click", form.showForm);
form.bookButton.addEventListener("click", form.showRipple);
form.date.addEventListener("focus", form.activeTiming);

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
Select.typeSelect.addEventListener("blur", ()=> Select.changeOnBlur(Select.typeSelect, Select.typeSelectTitle, Select.typeSelectContainer));
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
    Select.timeSelectContainer
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


import * as map from "./map.js";

console.log(`Вёрстка соответствует макету. Ширина экрана 1024px +40

Блок header +4
Секция Welcome +4
Секция Visiting +4
Секция Explore +4
Секция Video +4
Секция Gallery +4
Секция Tickets +4
Форма покупки билетов +4
Секция Contacts +4
Блок footer +4

Вёрстка соответствует макету. Ширина экрана 768px +40

Блок header +4
Секция Welcome +4
Секция Visiting +4
Секция Explore +4
Секция Video +4
Секция Gallery +4
Секция Tickets +4
Форма покупки билетов +4
Секция Contacts +4
Блок footer +4

Вёрстка соответствует макету. Ширина экрана 420px +40

Блок header +4
Секция Welcome +4
Секция Visiting +4
Секция Explore +4
Секция Video +4
Секция Gallery +4
Секция Tickets +4
Форма покупки билетов +4
Секция Contacts +4
Блок footer +4

Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки +6

Совмещается адаптивная и респонсивная вёрстка +14 При изменении ширины экрана плавно изменяются размеры:

слайдера в секции Welcome +2
слайдера в секции Explore +2
кастомного видеоплеера в секции Video +2
слайдера в секции Video +2
YouTube-видео в плейлисте в секции Video +2
галереи изображений и изображений в ней +2
карты +2

На ширине экрана 1024рх и меньше реализовано адаптивное меню +12

при нажатии на бургер-иконку меню появляется, плавно выдвигаясь слева, бургер-иконка изменяется на крестик. При нажатии на крестик меню исчезает, плавно возвращаясь назад, иконка крестика превращается в бургер-иконку +2
ссылки в меню работают, обеспечивая плавную прокрутку по якорям +2
при клике по ссылке в адаптивном меню, или при клике по любому месту сайта, кроме самого адаптивного меню, меню закрывается +2
вёрстка меню соответствует макету на всех проверяемых разрешениях +6

Оптимизация скорости загрузки страницы +8: Результат проверки скорости сайта - 99/100

Итого 160 баллов`);