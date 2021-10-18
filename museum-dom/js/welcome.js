export const welcomeSliderContainer = document.querySelector(
  ".welcome-block-slider"
);
export const videoSliderContainer = document.querySelector(".youtube-videos-slider");
export const welcomeSliderImages = document.querySelectorAll(".slide");
export const videoSliderVideos = document.querySelectorAll(".video-frame");
export const welcomeBulletsContainer = document.querySelector(".carousel-pagination");
export const videoBulletsContainer = document.querySelector(
  ".video-slider-pagination"
);
export const welcomeBullets = welcomeBulletsContainer.querySelectorAll(".slide__bullet");
export const videoBullets = videoBulletsContainer.querySelectorAll(
  ".video-slider__slide"
);
export const welcomeArrows = document.querySelectorAll(".arrows__arrow");
export const videoArrows = document.querySelectorAll(".video-slider__arrow");
export let currentNum = document.querySelector(".welcome-slide-num__current-num");
export let videoItemsLength = videoSliderVideos.length;


export class Slider {
    previousSlide;
    currentSlide = 1;
    isEnabled = true;
    currentNum = null;
    constructor(container, items, bulletsContainer, bullets, arrows, currentNum, activeClass, transformPercent) {
        this.container = container;
        this.items = items;
        this.itemsLength = items.length
        this.bulletsContainer = bulletsContainer;
        this.bullets = bullets;
        this.arrows = arrows;
        this.currentNum = currentNum;
        this.activeClass = activeClass;
        this.transformPercent = transformPercent;
    }
    clonePrepend(ind) {
        this.container.prepend(this.items[this.items.length - ind].cloneNode(true));
    }
    cloneAppend(ind) {
        this.container.append(this.items[ind].cloneNode(true));
    }
    slideElements(n) {
        this.previousSlide = this.currentSlide;
        this.currentSlide = n;
        this.activateBullet(this.previousSlide, this.currentSlide);
        if (this.currentNum != null) 
            this.changeSlideNumber(this.currentSlide);
        this.container.classList.add("transition-slider");
        this.container.style.transform = `translate(${
          -this.transformPercent * this.currentSlide
        }%, 0)`;
        if (this.currentSlide == this.itemsLength + 1 || this.currentSlide == 0) {
            this.container.addEventListener("transitionend", this.InfiniteLoop.bind(this), {once: true});
        }
    }

    changeSlideNumber(n) {
        if (n == this.itemsLength + 1) 
            n = 1;
        if (n == 0)
            n = this.itemsLength;
        this.currentNum.innerHTML = "0" + n;
    }
    activateBullet(prev, cur) {
        let previousBullet = (prev - 1 + this.bullets.length) % this.bullets.length;
        let currentBullet = (cur - 1 + this.bullets.length) % this.bullets.length;
        this.bullets[previousBullet].classList.remove(this.activeClass);
        this.bullets[currentBullet].classList.add(this.activeClass);
    }   

    InfiniteLoop() {
        if (this.currentSlide == 0) {
            this.container.style.transform = `translate(${
              -this.transformPercent * this.itemsLength
            }%, 0)`;
            this.currentSlide = this.itemsLength;
        } 
        else if (this.currentSlide == this.itemsLength + 1) {
            this.container.style.transform = `translate(${-this.transformPercent * 1}%, 0)`;
            this.currentSlide = 1;
        }
    }

    enableSliding() {
        this.isEnabled = !this.isEnabled;
    }

    swipeDetect(el) {
        let startX;
        let finishX;
        let finishY;
        let startY;
        let startTime;
        let finishTime;
        let allowedTime = 100;
        let distanceX;
        let distanceY;
        let allowedDistanceY = 300;
        let allowedDistanceX = 50;
        el.addEventListener('mousedown', (e) => {
            e.preventDefault();
            startX = e.pageX;
            startY = e.pageY;
            startTime = new Date();
        })
        window.addEventListener('mouseup', (e)=> {
            finishX = e.pageX;
            finishY = e.pageY;
            distanceX = Math.abs(finishX-startX);
            distanceY = Math.abs(finishY-startY)
            finishTime = new Date();
            if (distanceX > allowedDistanceX && distanceY < allowedDistanceY && finishTime-startTime > allowedTime && this.isEnabled)  {
                if (distanceX == finishX - startX) 
                    this.slideElements(this.currentSlide+1);
                else
                    this.slideElements(this.currentSlide-1);
            }
        })
    }
}
let videoTransformPercent = 35;
export let welcomeActiveClass = "slide__bullet_active";
export let videoActiveClass = "video-slider__slide_active";
export let welcomeSlider = new Slider(
  welcomeSliderContainer,
  welcomeSliderImages,
  welcomeBulletsContainer,
  welcomeBullets,
  welcomeArrows,
  currentNum,
  welcomeActiveClass,
  100
);
export let videoSlider = new Slider(
  videoSliderContainer,
  videoSliderVideos,
  videoBulletsContainer,
  videoBullets,
  videoArrows,
  null,
  videoActiveClass,
  35
);