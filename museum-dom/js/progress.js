export const videoBar = document.querySelector(".video-bar");
export const volumeBar = document.querySelector(".volume-bar");


export function changeProgress(e, coef) {
  let value = e.target.value * coef;
  e.target.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%)`;
}
