export const typeSelectContainer = document.querySelector(".select-container");
export const typeSelect = typeSelectContainer.querySelector("select");
export const typeSelectTitle = typeSelectContainer.querySelector(".select-title");
export const timeSelectContainer = document.querySelector(".booking-form-time");
export const timeSelect = timeSelectContainer.querySelector("select");
export const timeSelectTitle = timeSelectContainer.querySelector(".time__title");
export let flag = false;
export function changeBackground(container) {
  container.classList.toggle("select-container-focus");
}

export function defaultSelectBackground(e, container) {
  if (!e.target.closest(".select-container") && container.classList.contains("select-container-focus"))
    changeBackground(container);
}

export function changeOnFocus(select, title, num, container) {
    console.log('11')
  select.setAttribute("size", num);
  changeBackground(container);
  title.style.display = "block";
}

export function changeOnBlur(select, title, container) {
  select.setAttribute("size", 0);
  changeBackground(container);
  if (flag) title.style.display = "none";
}

export function chooseOption(select, title) {
  flag = true;
  select.setAttribute("size", 1);
  select.blur();
  title.style.display = "none";
}
