const hamburger = document.querySelector('.hamburger');
const hamburgerLine = document.querySelector('.hamburger__line')
const sideMenu = document.querySelector(".header-nav");
const sideMenuItems = document.querySelectorAll(".header-nav-list__item");
const body = document.body;

hamburger.addEventListener("click", toggleHamburger);
body.addEventListener("click", hideMenuByClickOnBody);

function toggleHamburger(e) {
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