const ticketsBuyButton = document.querySelector(".amount-buy");
const form = document.querySelector('form')
const overlay = document.querySelector('.overlay');
const closingForm = document.querySelector('.form-close');
const bookButton = document.querySelector('.form-button');
const circle = document.querySelector('.form-button span')

ticketsBuyButton.addEventListener('click', showForm);
closingForm.addEventListener('click', showForm);
overlay.addEventListener("click", showForm);
bookButton.addEventListener('click', showRipple)

function showForm() {
    form.classList.toggle('form_active');
    overlay.classList.toggle('overlay_active');
}

function showRipple(e) {
    if (e.target.closest(".ripple")) return;
    circle.classList.add("ripple");
    circle.style.left = e.offsetX + "px";
    circle.style.top = e.offsetY + "px";
    setTimeout(() => circle.classList.remove("ripple"), 500)
}