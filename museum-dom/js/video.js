import * as Welcome from "./welcome.js";
export const videoPlayer = document.querySelector(".video-player");
export const video = videoPlayer.querySelector(".video");
export const videoControl = videoPlayer.querySelector(".video-buttons");
export const playButton = videoPlayer.querySelector(".play-container");
export const smallPlayButton = videoControl.querySelector(".small-play");
export const volumeButton = videoControl.querySelector(".volume");
export const fullscreenButton = videoControl.querySelector(".fullscreen");
export const videoBar = videoControl.querySelector(".video-bar");
export const volumeBar = videoControl.querySelector(".volume-bar");

export let previousValue;
export let timeout;

export let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0
}
export function changeSrc(n) {
    if (n == Welcome.videoItemsLength + 1) n = 1;
    if (n == 0) n = Welcome.videoItemsLength;
    video.src = `../assets/videos/${n}.mp4`;
    video.poster = `../assets/img/posters/${n}.jpg`;
    endingVideo();
}
export function observeKeyCode() {
    let observer = new IntersectionObserver((entries) => {
        entries.forEach((entry)=> {
            if (entry.isIntersecting) {
                window.addEventListener("keydown", togglePlay);
                window.addEventListener("keydown", muteSound);
                window.addEventListener("keydown", videoPlaybackRate);
                window.addEventListener("keydown", toggleScreen);
                window.addEventListener("keydown", skip);
                window.addEventListener("keydown", changeVolume);
                window.addEventListener("keydown", transitionToStartOrToFinish);
                window.addEventListener("keydown", transitionToPartOfVideo);
            }
            else {
                window.removeEventListener("keydown", togglePlay);
                window.removeEventListener("keydown", muteSound);
                window.removeEventListener("keydown", videoPlaybackRate);
                window.removeEventListener("keydown", toggleScreen);
                window.removeEventListener("keydown", skip);
                window.removeEventListener("keydown", changeVolume);
                window.removeEventListener(
                  "keydown",
                  transitionToStartOrToFinish
                );
                window.removeEventListener("keydown", transitionToPartOfVideo);
            }
        });
    }, options);
    observer.observe(video);
}


export function changeProgress(e, coef) {
    console.log('11')
  let value = e.target.value * coef;
  e.target.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%)`;
}

export function togglePlay(e) {
  e.preventDefault();
  if (e.keyCode != 32 && e.keyCode != 75 && e.type != "click") {
    // определение типа события
    return;
  }
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
  hidingControl();
  smallPlayButton.classList.toggle("pause");
}

export function showAndHideControl() {
  videoControl.classList.remove("hide");
  setTimeout(() => videoControl.classList.add("hide"), 5000);
}

export function hidingControl() {
  playButton.classList.toggle("hidden");
  videoControl.classList.toggle("hide");
}

export function changeVolume(e) {
  if (volumeBar.value == "0") {
    volumeButton.classList.add("mute");
  } else {
    volumeButton.classList.remove("mute");
  }
  if (e.keyCode == 38) {
    volumeBar.value = +volumeBar.value + 0.05;
    showAndHideControl();
  }
  if (e.keyCode == 40) {
    volumeBar.value -= 0.05;
    showAndHideControl();
  }
  video.volume = volumeBar.value;
}

export function muteSound(e) {
    console.log("11");
  if (e.keyCode != 77 && e.type != "click") {
    return;
  }
  if (volumeBar.value == "0") {
    volumeBar.value = previousValue;
    volumeBar.style.background = `linear-gradient(to right, #710707 0%, #710707 ${
      previousValue * 100
    }%, #C4C4C4 ${previousValue * 100}%, #C4C4C4 100%)`;
    video[volumeBar.name] = volumeBar.value;
    volumeButton.classList.remove("mute");
    showAndHideControl();
  } else {
    previousValue = volumeBar.value;
    volumeBar.style.background = `linear-gradient(to right, #710707 0%, #710707 0%, #C4C4C4 0%, #C4C4C4 100%)`;
    volumeBar.value = "0";
    video[volumeBar.name] = volumeBar.value;
    volumeButton.classList.add("mute");
    showAndHideControl();
  }
}

export function endingVideo() {
  // установка дефолтных значений при окончании видео
  smallPlayButton.classList.remove("pause");
  playButton.classList.remove("hidden");
  videoControl.classList.remove("hide");
  videoBar.value = "0";
  videoBar.style.background = `linear-gradient(to right, #710707 0%, #710707 ${videoBar.value}%, #C4C4C4 ${videoBar.value}%, #C4C4C4 100%)`;
  video.playbackRate = 1;
  if (volumeBar.value == "0") {
    volumeBar.value = previousValue;
    video[volumeBar.name] = volumeBar.value;
    volumeButton.classList.remove("mute");
  }
}

export function toggleScreen(e) {
  // добавление фулскрина
  if (e.keyCode != 70 && e.type != "click") {
    return;
  }
  if (!document.fullscreenElement) {
    videoPlayer.requestFullscreen();
    setTimeout(() => videoControl.classList.add("hide"), 5000); //убираем панель
    videoPlayer.addEventListener("mousemove", () => {
      // показ панели при движении мыши
      videoControl.classList.remove("hide");
      clearTimeout(timeout);
      timeout = setTimeout(() => videoControl.classList.add("hide"), 5000); //если юзер не двигает мышкой 5 секунд, то панель скрывается
    });
  } else {
    if (document.fullscreenEnabled) {
      document.exitFullscreen();
    }
  }
  fullscreenButton.classList.toggle("exit");
}

export function videoPlaybackRate(e) {
  if (e.keyCode == 190) {
    video.playbackRate += 0.25;
    showAndHideControl();
  }
  else if (e.keyCode == 188 && video.playbackRate > 0.25) {
    video.playbackRate -= 0.25;
    showAndHideControl();
  }
  else {
      return;
  }
  createSpeed(video.playbackRate);
}

export function createSpeed(coef) {
    let speed = document.createElement('div');
    speed.innerHTML = coef + 'x';
    videoPlayer.append(speed);
    speed.classList.add('speed');
    setTimeout(()=> {
        speed.remove();
    }, 1000)
}

export function updateBar() {
    if ((video.currentTime / video.duration) * 100)
        videoBar.value = (video.currentTime / video.duration) * 100;
    videoBar.style.background = `linear-gradient(to right, #710707 0%, #710707 ${videoBar.value}%, #C4C4C4 ${videoBar.value}%, #C4C4C4 100%)`;
}

export function changeVideoTime(e) {
  let time = (e.offsetX / videoBar.offsetWidth) * video.duration;
  video.currentTime = time;
}

export function transitionToStartOrToFinish(e) {
  if (e.keyCode == 36 || e.keyCode == 48) {
    video.currentTime = 0;
    playButton.classList.add("hidden");
    setTimeout(() => videoControl.classList.add("hide"), 5000);
    smallPlayButton.classList.add("pause");
    video.play();
  }
  if (e.keyCode == 35) {
    video.currentTime = video.duration;
  }
}

export function skip(e) {
  if (e.keyCode == 74) {
    video.currentTime -= 10;
    showAndHideControl();
  }
  if (e.keyCode == 76) {
    video.currentTime += 10;
    showAndHideControl();
  }
  if (e.keyCode == 39) {
    video.currentTime += 5;
    showAndHideControl();
  }
  if (e.keyCode == 37) {
    video.currentTime -= 5;
    showAndHideControl();
  }
}

export function transitionToPartOfVideo(e) {
  if (e.keyCode >= 48 && e.keyCode <= 57) {
    video.currentTime = (video.duration / 10) * e.key;
    showAndHideControl();
  }
}


