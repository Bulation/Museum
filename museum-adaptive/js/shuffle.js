export const gallery = document.querySelector('.gallery-img-container');
export let images = [
  `<img src="assets/img/gallery/galery1.webp" loading="lazy" alt="Psyche Revived by Cupid's Kiss">`,
  `<img src="assets/img/gallery/galery2.webp" loading="lazy" alt="Diana of Versailles">`,
  `<img src="assets/img/gallery/galery3.webp" loading="lazy" alt="The Dying Slave">`,
  `<img src="assets/img/gallery/galery4.webp" loading="lazy" alt="Winged victory of samothrace">`,
  `<img src="assets/img/gallery/galery5.webp" loading="lazy" alt="Venus de Milo">`,
  `<img src="assets/img/gallery/galery6.webp" loading="lazy" alt="The Virgin and Child with Saint Anne">`,
  `<img src="assets/img/gallery/galery7.webp" loading="lazy" alt="Mona Lisa">`,
  `<img src="assets/img/gallery/galery8.webp" loading="lazy" alt="Louvre inner">`,
  `<img src="assets/img/gallery/galery9.webp" loading="lazy" alt="Louvre greek statues">`,
  `<img src="assets/img/gallery/galery10.webp" loading="lazy" alt="Islamic arts louvre">`,
  `<img src="assets/img/gallery/galery11.webp" loading="lazy" alt="Liberty Leading the People">`,
  `<img src="assets/img/gallery/galery12.webp" loading="lazy" alt="The Cour Marly">`,
  `<img src="assets/img/gallery/galery13.webp" loading="lazy" alt="Sculpture">`,
  `<img src="assets/img/gallery/galery14.webp" loading="lazy" alt="La Belle Ferronnière">`,
  `<img src="assets/img/gallery/galery15.webp" loading="lazy" alt="Louvre outer">`,
];
gallery.innerHTML = '';

export function shuffle(array) {
  let result = [];
  while (array.length > 0)
    result.push(array.splice(getRandom(0, array.length - 1), 1));
  return result;
}

export function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min));
}

shuffle(images).map((img) => (gallery.innerHTML += img));