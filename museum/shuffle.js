const gallery = document.querySelector('.gallery-img-container');
let images = [
  `<img src="assets/img/gallery/galery1.jpg" alt="">`,
  `<img src="assets/img/gallery/galery2.jpg" alt="">`,
  `<img src="assets/img/gallery/galery3.jpg" alt="">`,
  `<img src="assets/img/gallery/galery4.jpg" alt="">`,
  `<img src="assets/img/gallery/galery5.jpg" alt="">`,
  `<img src="assets/img/gallery/galery6.jpg" alt="">`,
  `<img src="assets/img/gallery/galery7.jpg" alt="">`,
  `<img src="assets/img/gallery/galery8.jpg" alt="">`,
  `<img src="assets/img/gallery/galery9.jpg" alt="">`,
  `<img src="assets/img/gallery/galery10.jpg" alt="">`,
  `<img src="assets/img/gallery/galery11.jpg" alt="">`,
  `<img src="assets/img/gallery/galery12.jpg" alt="">`,
  `<img src="assets/img/gallery/galery13.jpg" alt="">`,
  `<img src="assets/img/gallery/galery14.jpg" alt="">`,
  `<img src="assets/img/gallery/galery15.jpg" alt="">`,
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