export const imgContainer = document.querySelector(".explore-image");
export const slider = imgContainer.querySelector(".explore-slider");
export const firstImg = imgContainer.querySelector(".explore-image-container");
export function moveSlider(e) {
    e.preventDefault();
    let coordinate =
      e.pageX - firstImg.getBoundingClientRect().left;
    if (coordinate < 5) {
        coordinate = 5;
    }
    else if (coordinate > imgContainer.getBoundingClientRect().width) {
      coordinate = imgContainer.getBoundingClientRect().width;
    }
    firstImg.style.width = coordinate + "px";
    slider.style.left = firstImg.offsetWidth - slider.offsetWidth / 2 - 1 + "px";
}