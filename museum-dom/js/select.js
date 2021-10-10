export const selectContainer = document.querySelector(".select-container");
export const select = selectContainer.querySelector("select");
export const selectTitle = selectContainer.querySelector(".select-title");
export let flag = false;
export function changeBackground() {
  selectContainer.classList.toggle("select-container-focus");
}

export function defaultSelectBackground(e) {
  if (
    !e.target.closest(".select-container") &&
    selectContainer.classList.contains("select-container-focus")
  )
    changeBackground();
}

export function changeOnFocus() {
  this.setAttribute("size", 3);
  changeBackground();
  selectTitle.style.display = "block";
}

export function changeOnBlur() {
  this.setAttribute("size", 0);
  changeBackground();
  if (flag) selectTitle.style.display = "none";
}

export function chooseOption() {
  flag = true;
  this.setAttribute("size", 1);
  this.blur();
  selectTitle.style.display = "none";
}
