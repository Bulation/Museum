export const hamburger = document.querySelector('.hamburger');
export const hamburgerLine = hamburger.querySelector(".hamburger__line");
export const sideMenu = document.querySelector(".header-nav");
export const sideMenuItems = sideMenu.querySelectorAll(".header-nav-list__item");
export const socials = document.querySelector(".socials");
export const welcome = document.querySelector(".welcome-block");
export const adaptiveImg = sideMenu.querySelector(".adaptive-menu-img-container");

export function toggleHamburger(e) {
  socials.classList.toggle("socials-menu");
  hamburgerLine.classList.toggle("hamburger__line");
  adaptiveImg.classList.toggle('hidden');
  hamburgerLine.classList.toggle("close");
  sideMenu.classList.toggle("transform");
  welcome.classList.toggle("opacity");
  for (let item of sideMenuItems)
    item.addEventListener("click", toggleHamburger);
}

export function hideMenuByClickOnBody(e) {
  if (
    !e.target.closest(".header-nav") &&
    !e.target.closest(".hamburger") &&
    hamburgerLine.matches(".close")
  )
    toggleHamburger(e);
}
