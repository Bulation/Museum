const hamburger = document.querySelector('.hamburger');
const hamburgerLine = document.querySelector('.hamburger__line')
const sideMenu = document.querySelector(".header-nav");
const sideMenuItems = document.querySelectorAll(".header-nav-list__item");
const socials = document.querySelector('.socials')

hamburger.addEventListener("click", toggleHamburger);
window.addEventListener("click", hideMenuByClickOnBody);

function toggleHamburger(e) {
  socials.classList.toggle('socials-menu');
  hamburgerLine.classList.toggle("hamburger__line");
  hamburgerLine.classList.toggle("close");
  sideMenu.classList.toggle("transform");
  for (let item of sideMenuItems)
    item.addEventListener("click", toggleHamburger);
}

function hideMenuByClickOnBody(e) {
  if (
    !e.target.closest(".header-nav") &&
    !e.target.closest(".hamburger") &&
    hamburgerLine.matches(".close")
  )
    toggleHamburger(e);
}