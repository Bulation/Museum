const gallery = document.querySelector('.gallery-img-container');
let images = [
  `<img src="assets/img/gallery/galery1.webp" alt="">`,
  `<img src="assets/img/gallery/galery2.webp" alt="">`,
  `<img src="assets/img/gallery/galery3.webp" alt="">`,
  `<img src="assets/img/gallery/galery4.webp" alt="">`,
  `<img src="assets/img/gallery/galery5.webp" alt="">`,
  `<img src="assets/img/gallery/galery6.webp" alt="">`,
  `<img src="assets/img/gallery/galery7.webp" alt="">`,
  `<img src="assets/img/gallery/galery8.webp" alt="">`,
  `<img src="assets/img/gallery/galery9.webp" alt="">`,
  `<img src="assets/img/gallery/galery10.webp" alt="">`,
  `<img src="assets/img/gallery/galery11.webp" alt="">`,
  `<img src="assets/img/gallery/galery12.webp" alt="">`,
  `<img src="assets/img/gallery/galery13.webp" alt="">`,
  `<img src="assets/img/gallery/galery14.webp" alt="">`,
  `<img src="assets/img/gallery/galery15.webp" alt="">`,
];
gallery.innerHTML = '';

function shuffle(array) {
    let result = [];
    while (array.length > 0) 
        result.push(array.splice(getRandom(0, array.length-1), 1));
    return result;
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max-min))
}

shuffle(images).map((img) => gallery.innerHTML += img);