import * as form  from './form.js';
import * as Tickets from './tickets.js'

export const typeSelectContainer = document.querySelector(".select-container");
export const typeSelect = typeSelectContainer.querySelector("select");
export const typeSelectTitle = typeSelectContainer.querySelector(".select-title");
export const timeSelectContainer = document.querySelector(".booking-form-time");
export const timeSelect = timeSelectContainer.querySelector("select");
export const timeSelectTitle = timeSelectContainer.querySelector(".time__title");
export const entryBasicPrice = document.querySelector(".ticket-basic__price");
export const entrySeniorPrice = document.querySelector(".ticket-senior__price");
export const overviewBasicPrice = document.querySelector(".ticket-description__price");
export const overviewSeniorPrice = document.querySelectorAll(
  ".ticket-description__price"
)[1];
export function changeBackground(container) {
    if (container.classList.contains("booking-form-time")) {
        container.classList.toggle("booking-form-time-focus");
    }
    else {
        container.classList.toggle("select-container-focus");
    }
}

export function defaultSelectBackground(e, container) {
  if (!e.target.closest(".select-container") && container.classList.contains("select-container-focus"))
    changeBackground(container);
}

export function changeOnFocus(select, title, num, container) {
  select.setAttribute("size", num);
  changeBackground(container);
  title.style.display = "block";
}

export function changeOnBlur(select, title, container, overviewInformaion) {
  overviewInformaion.innerHTML = select.value;
  select.setAttribute("size", 0);
  changeBackground(container);
  if (select.className == 'booking-form-tickets')
    title.style.display = "none";
}

export function chooseOption(select, title) {
  select.setAttribute("size", 1);
  select.blur();
  title.style.display = "none";
}

export function changePriceByType() {
    entryBasicPrice.innerHTML = Tickets.prices[typeSelect.selectedIndex-1];
    entrySeniorPrice.innerHTML = Tickets.prices[typeSelect.selectedIndex - 1] / 2;
    overviewBasicPrice.innerHTML = `Basic (${Tickets.prices[typeSelect.selectedIndex - 1]} €)`;
    overviewSeniorPrice.innerHTML = `Basic (${Tickets.prices[typeSelect.selectedIndex - 1] / 2} €)`;
    form.changePriceOnForm();
}