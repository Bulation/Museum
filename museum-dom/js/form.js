import * as Select from "./select.js";
import * as Tickets from "./tickets.js";

export const form = document.querySelector("form");
export const ticketsBuyButton = document.querySelector(".amount-buy");
export const overlay = document.querySelector(".overlay");
export const closingForm = form.querySelector(".form-close");
export const bookButton = form.querySelector(".form-button");
export const circle = bookButton.querySelector(".form-button span");
export const date = form.querySelector(".booking-form-timing");
export const formTotalPrice = form.querySelector(
  ".form-overview-total-price__euro"
);
export const formTicketsCount = form.querySelectorAll(
  ".ticket-description__count"
);
export const formPrices = form.querySelectorAll(
  ".form-overview-ticket-price__text"
);
export const formInputBasicPrice = form.querySelectorAll(
  ".ticket-number-buttons__number"
)[0];
export const formInputSeniorPrice = form.querySelectorAll(
  ".ticket-number-buttons__number"
)[1];
export const formTicketType = form.querySelector(".form-overview__ticket");
export const formTicketTime = form.querySelector(".form-overview__time");
export const nameInput = form.querySelector(".booking-form-name");
export const emailInput = form.querySelector(".booking-form-email");
export const phoneInput = form.querySelector(".booking-form-phone");
export const dateInput = form.querySelector(".booking-form-date");
export const formTicketDate = form.querySelector(".form-overview__date");

let stringDate = new Date();
date.min = `${stringDate.getFullYear()}-${
  stringDate.getMonth() + 1
}-${stringDate.getDate()}`;

export function showForm() {
  if (form.classList.contains('form_active')) {
      Select.typeSelect.selectedIndex = Tickets.radioButtonIndex+1;
  }
  form.classList.toggle("form_active");
  overlay.classList.toggle("overlay_active");
}

export function showRipple(e) {
  if (e.target.closest(".ripple")) return;
  circle.classList.add("ripple");
  circle.style.left = e.offsetX + "px";
  circle.style.top = e.offsetY + "px";
  setTimeout(() => circle.classList.remove("ripple"), 500);
}

export function activeTiming() {
  this.classList.add("booking-form-timing-active");
}

export function updateSelect() {
  Select.typeSelect.selectedIndex = Tickets.radioButtonIndex + 1;
  formTicketType.innerHTML = Select.typeSelect.value;
}

export function changePriceOnForm() {
  formTicketsCount[0].innerHTML = formInputBasicPrice.value;
  formTicketsCount[1].innerHTML = formInputSeniorPrice.value;
  formPrices[0].innerHTML =
    Tickets.prices[Select.typeSelect.selectedIndex-1] * formInputBasicPrice.value + " €";
  formPrices[1].innerHTML =
    (Tickets.prices[Select.typeSelect.selectedIndex - 1] / 2) *
      formInputSeniorPrice.value +
    " €";
  formTotalPrice.innerHTML =
    Tickets.prices[Select.typeSelect.selectedIndex - 1] *
      formInputBasicPrice.value +
    (Tickets.prices[Select.typeSelect.selectedIndex - 1] / 2) *
      formInputSeniorPrice.value +
    " €";
}
export function updateDataOnFormFromTickets() {
  formTotalPrice.innerHTML = Tickets.totalPrice.innerHTML + " €";
  formPrices[0].innerHTML =
    Tickets.prices[Select.typeSelect.selectedIndex - 1] *
      Tickets.basicPrice.value +
    " €";
  formPrices[1].innerHTML =
    (Tickets.prices[Select.typeSelect.selectedIndex - 1] / 2) *
      Tickets.seniorPrice.value +
    " €";
  formTicketsCount[0].innerHTML = Tickets.basicPrice.value;
  formTicketsCount[1].innerHTML = Tickets.seniorPrice.value;
  formInputBasicPrice.value = Tickets.basicPrice.value;
  formInputSeniorPrice.value = Tickets.seniorPrice.value;
}

export function changeDate() {
    let date = new Date(dateInput.value);
    let options = {
      weekday: "long",
      month: "long",
      day: "numeric",
    };
    formTicketDate.innerHTML = date.toLocaleDateString("en-US", options);
}
let warnings = {
  text: "Name must contains from 3 to 15 latin or russian characters",
  email:
    "email username must contains from 3 to 15 characters (letters, numbers, underscore, hyphen), must not contains spaces, must contains @, first level domain with as minimum 4 characters, top-level domain with as minimum 2 characters",
  date: 'Date must not be in past',
  tel: 'the number contains only numbers; without division or with division into two or three digits; separation of numbers can be separated by a hyphen or a space; with a limit on the number of digits no more than 10 digits'
};
export function validateInput(input) {
    let pattern = new RegExp(input.pattern);
    if (!pattern.test(input.value)) {
        Tickets.createWarning(input, warnings[input.type]);
        input.style.border = '3px solid red';
    }
}

export function validateDate(input) {
    let date1 = new Date();
    let date2 = new Date(input.value)
    if (date1 - date2 > 0) {
      Tickets.createWarning(input, warnings[input.type]);
      input.style.border = "3px solid red";
    }
}

export function validatePhone(input) {
    let str = input.value;
    let strWithoutDigits = str.replace(/\d/gm,'');
    console.log(str.length - strWithoutDigits.length);
    let reg = /^(\d{2,3}[-\s])+\d{2,3}$/;
    if (str.length-strWithoutDigits.length < 1 || str.length-strWithoutDigits.length > 10 || !reg.test(input.value)) {
        Tickets.createWarning(input, warnings[input.type]);
        input.style.border = "3px solid red";
    }
}