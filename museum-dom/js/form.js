export const form = document.querySelector("form");
export const ticketsBuyButton = document.querySelector(".amount-buy");
export const overlay = document.querySelector(".overlay");
export const closingForm = form.querySelector(".form-close");
export const bookButton = form.querySelector(".form-button");
export const circle = bookButton.querySelector(".form-button span");
export const date = form.querySelector(".booking-form-timing");
let stringDate = new Date();
date.min = `${stringDate.getFullYear()}-${stringDate.getMonth()+1}-${stringDate.getDate()}`;
export function showForm() {
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
