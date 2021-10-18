export function findVideos() {
  let videos = document.querySelectorAll(".video-frame");

  for (let i = 0; i < videos.length; i++) {
    setupVideo(videos[i]);
  }
}

export function setupVideo(video) {
  let link = video.querySelector(".video__link");
  let control = video.querySelector(".video-control");
  let media = video.querySelector(".video__media");
  let button = video.querySelector(".video__button");
  let id = parseMediaURL(media);
  video.addEventListener("click", () => {
    let iframe = createIframe(id);
    link.remove();
    button.remove();
    control.remove();
    video.appendChild(iframe);
  });
  link.removeAttribute("href");
}

export function parseMediaURL(media) {
    let regexp;
  if (media.src.includes('Vi5D6FKhRmo'))
    return 'Vi5D6FKhRmo';
  else
    regexp =
      /https:\/\/img\.youtube\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
  let url = media.src;
  let match = url.match(regexp);

  return match[1];
}

export function createIframe(id) {
  let iframe = document.createElement("iframe");

  iframe.setAttribute("allowfullscreen", "");
  iframe.setAttribute("allow", "autoplay");
  iframe.setAttribute("src", generateURL(id));
  iframe.classList.add("video__media");

  return iframe;
}

export function generateURL(id) {
  let query = "?rel=0&showinfo=0&autoplay=1";

  return "https://www.youtube.com/embed/" + id + query;
}