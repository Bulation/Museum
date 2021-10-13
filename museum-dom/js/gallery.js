export const gallery = document.querySelector('.gallery-img-container');
export let images = [
  `<img class="gallery__img" src="assets/img/gallery/galery1.webp" loading="lazy" alt="Psyche Revived by Cupid's Kiss">`,
  `<img class="gallery__img" src="assets/img/gallery/galery2.webp" loading="lazy" alt="Diana of Versailles">`,
  `<img class="gallery__img" src="assets/img/gallery/galery3.webp" loading="lazy" alt="The Dying Slave">`,
  `<img class="gallery__img" src="assets/img/gallery/galery4.webp" loading="lazy" alt="Winged victory of samothrace">`,
  `<img class="gallery__img" src="assets/img/gallery/galery5.webp" loading="lazy" alt="Venus de Milo">`,
  `<img class="gallery__img" src="assets/img/gallery/galery6.webp" loading="lazy" alt="The Virgin and Child with Saint Anne">`,
  `<img class="gallery__img" src="assets/img/gallery/galery7.webp" loading="lazy" alt="Mona Lisa">`,
  `<img class="gallery__img" src="assets/img/gallery/galery8.webp" loading="lazy" alt="Louvre inner">`,
  `<img class="gallery__img" src="assets/img/gallery/galery9.webp" loading="lazy" alt="Louvre greek statues">`,
  `<img class="gallery__img" src="assets/img/gallery/galery10.webp" loading="lazy" alt="Islamic arts louvre">`,
  `<img class="gallery__img" src="assets/img/gallery/galery11.webp" loading="lazy" alt="Liberty Leading the People">`,
  `<img class="gallery__img" src="assets/img/gallery/galery12.webp" loading="lazy" alt="The Cour Marly">`,
  `<img class="gallery__img" src="assets/img/gallery/galery13.webp" loading="lazy" alt="Sculpture">`,
  `<img class="gallery__img" src="assets/img/gallery/galery14.webp" loading="lazy" alt="La Belle Ferronnière">`,
  `<img class="gallery__img" src="assets/img/gallery/galery15.webp" loading="lazy" alt="Louvre outer">`,
];


export function shuffle(array) {
  let result = [];
  while (array.length > 0)
    result.push(array.splice(getRandom(0, array.length - 1), 1));
  return result;
}

export function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min));
}


export function slideOn() {
    console.log(1)
    images = Array.from(document.querySelectorAll(".gallery__img"));
    for (let i = 0; i < images.length; i++) {
        let height = images[i].offsetHeight;
        let top = images[i].getBoundingClientRect().top;
        if (window.innerHeight > top + height / 2 && top + height > 0) {
          images[i].classList.add("gallery__img_active");
        } else if (window.innerHeight < top) {
          images[i].classList.remove("gallery__img_active");
        }
    }
}