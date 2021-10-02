const select = document.querySelector("select");
const selectContainer = document.querySelector(".select-container");
selectContainer.addEventListener("click", changeBackground);
window.addEventListener("click", defaultSelectBackground);
function changeBackground() {
  selectContainer.classList.toggle("select-container-focus");
}

function defaultSelectBackground(e) {
  if (
    !e.target.closest(".select-container") &&
    selectContainer.classList.contains("select-container-focus")
  )
    changeBackground();
}
