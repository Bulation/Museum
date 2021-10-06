export const ticketsBuyButton = document.querySelector(".amount-buy");
export const form = document.querySelector("form");
export const overlay = document.querySelector(".overlay");
export const closingForm = document.querySelector(".form-close");
export const bookButton = document.querySelector(".form-button");
export const circle = document.querySelector(".form-button span");
export const date = document.querySelectorAll(".booking-form-timing")[0];
export const time = document.querySelectorAll(".booking-form-timing")[1];

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