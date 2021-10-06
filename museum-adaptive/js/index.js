
import * as menu from "./menu.js";
menu.hamburger.addEventListener("click", menu.toggleHamburger);
window.addEventListener("click", menu.hideMenuByClickOnBody);

import * as form from "./form.js";
form.ticketsBuyButton.addEventListener("click", form.showForm);
form.closingForm.addEventListener("click", form.showForm);
form.overlay.addEventListener("click", form.showForm);
form.bookButton.addEventListener("click", form.showRipple);
form.time.addEventListener('focus', form.activeTiming);
form.date.addEventListener('focus', form.activeTiming);

import * as iframe from "./iframe.js";
iframe.findVideos();

import * as progress from "./progress.js";
progress.videoBar.addEventListener("input", (e) =>
  progress.changeProgress(e, 1)
);
progress.volumeBar.addEventListener("input", (e) =>
  progress.changeProgress(e, 100)
);

import * as Select from "./select.js";
let flag = false;
Select.select.addEventListener("focus", Select.changeOnFocus);
Select.select.addEventListener("blur", Select.changeOnBlur);
Select.select.addEventListener("change", Select.chooseOption);
window.addEventListener("click", Select.defaultSelectBackground);

import * as gal from "./shuffle.js";
gal.gallery.innerHTML = "";
gal.shuffle(gal.images).map((img) => (gal.gallery.innerHTML += img));

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