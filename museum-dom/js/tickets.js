export const prices = [20, 25, 40];
export const amountContainer = document.querySelector(".amount");
export const totalPrice = amountContainer.querySelector(".amount-price__value");
export const basicPrice = amountContainer.querySelectorAll(".amount-number-buttons__number")[0];
export const seniorPrice = amountContainer.querySelectorAll(".amount-number-buttons__number")[1];
export const radioButtons = Array.from(document.querySelectorAll(".ticket-type__label"));
export let radioButtonIndex = 0;

radioButtons.forEach((el, ind) => {
    el.addEventListener("click", (e) => {
        radioButtonIndex = ind;
        populateStorage();
        changePrice();
    });
});

export function increaseAmount(e) {
    if (e.target.className == 'amount-number-buttons__minus') {
        e.target.nextElementSibling.stepDown();
    } 
    else if (e.target.className == "amount-number-buttons__plus") {
        e.target.previousElementSibling.stepUp();
    }
    else {
        return;
    }
    changePrice();
    removeWarning();
}
export function validatePrice() {
    if (this.value < 0 || this.value > 20 || isNaN(this.value)) {
        this.value = 1;
        createWarning(this.parentElement);
    }
    changePrice();
}

export function createWarning(parent) {
    let warning = document.createElement('p');
    warning.style.color = 'red';
    warning.style.fontSize = '14px';
    warning.style.maxWidth = '150px';
    warning.className = 'price-warning'
    warning.innerHTML = 'Amount must be between 0 and 20';
    parent.after(warning);
}
export function removeWarning() {
    let warning = document.querySelector('.price-warning');
    if (warning)
        warning.remove();
}
export function changePrice() {
    totalPrice.innerHTML = prices[radioButtonIndex] * basicPrice.value + prices[radioButtonIndex] / 2 * seniorPrice.value;
    populateStorage();
}

export function setStylesFromStorage() {
    let radioIndex = localStorage.getItem("radio");
    radioButtons[radioIndex].children[0].checked = true;
    totalPrice.innerHTML = localStorage.getItem('totalprice');
    basicPrice.value = localStorage.getItem("basic");
    seniorPrice.value = localStorage.getItem('senior');
}

export function populateStorage() {
    localStorage.setItem("radio", radioButtonIndex);
    localStorage.setItem("totalprice", totalPrice.innerHTML);
    localStorage.setItem('basic', basicPrice.value);
    localStorage.setItem('senior', seniorPrice.value);
}