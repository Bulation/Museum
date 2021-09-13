const videoBar = document.querySelector('.video-bar');
const volumeBar = document.querySelector('.volume-bar');
videoBar.addEventListener("input", (e) => changeProgress(e, 1));
volumeBar.addEventListener("input", (e) => changeProgress(e, 100));

function changeProgress(e, coef) {
    let value = e.target.value * coef;
    e.target.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%)`;
}