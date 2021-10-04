export const select = document.querySelector("select");
export const selectContainer = document.querySelector(".select-container");

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
