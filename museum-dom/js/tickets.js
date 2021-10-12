import * as Select from "./select.js";
import * as form from "./form.js";

export const prices = [20, 25, 40];
export const amountContainer = document.querySelector(".amount");
export const totalPrice = amountContainer.querySelector(".amount-price__value");
export const basicPrice = amountContainer.querySelectorAll(
  ".amount-number-buttons__number"
)[0];
export const seniorPrice = amountContainer.querySelectorAll(
  ".amount-number-buttons__number"
)[1];
export const radioButtons = Array.from(
  document.querySelectorAll(".ticket-type__label")
);


export let radioButtonIndex = 0;

radioButtons.forEach((el, ind) => {
  el.addEventListener("click", (e) => {
    radioButtonIndex = ind;
    Select.typeSelect.selectedIndex = ind + 1;
    Select.typeSelectTitle.style.display = "none";
    Select.changePriceByType();
    populateStorage();
    changePrice();
  });
});
export function increaseAmount(e) {
  if (
    e.target.className == "amount-number-buttons__minus" ||
    e.target.className == "ticket-number-buttons__minus"
  ) {
    e.target.nextElementSibling.stepDown();
    console.log(e);
  } else if (
    e.target.className == "amount-number-buttons__plus" ||
    e.target.className == "ticket-number-buttons__plus"
  ) {
    e.target.previousElementSibling.stepUp();
  } else {
    return;
  }
  changePrice();
  form.changePriceOnForm();
  removeWarning();
}
export function validatePrice() {
  if (this.value < 0 || this.value > 20 || isNaN(this.value)) {
    this.value = 1;
    createWarning(this.parentElement, "Amount must be between 0 and 20");
  }
  changePrice();
}

export function createWarning(parent, text) {
  let warning = document.createElement("p");
  warning.style.color = "red";
  warning.style.fontSize = "14px";
  warning.style.maxWidth = parent.style.width;
  warning.className = "warning";
  warning.innerHTML = text;
  parent.after(warning);
}
export function removeWarning() {
  let warning = document.querySelector(".warning");
  if (warning) warning.remove();
}
export function changePrice() {
  totalPrice.innerHTML =
    prices[radioButtonIndex] * basicPrice.value +
    (prices[radioButtonIndex] / 2) * seniorPrice.value;
  populateStorage();
}



export function setStylesFromStorage() {
  radioButtonIndex = +localStorage.getItem("radio");
  Select.typeSelect.selectedIndex = radioButtonIndex + 1;
  Select.typeSelectTitle.style.display = "none";
  radioButtons[radioButtonIndex].children[0].checked = true;
  totalPrice.innerHTML = localStorage.getItem("totalprice");
  basicPrice.value = localStorage.getItem("basic");
  seniorPrice.value = localStorage.getItem("senior");
}

export function populateStorage() {
  localStorage.setItem("radio", radioButtonIndex);
  localStorage.setItem("totalprice", totalPrice.innerHTML);
  localStorage.setItem("basic", basicPrice.value);
  localStorage.setItem("senior", seniorPrice.value);
}
