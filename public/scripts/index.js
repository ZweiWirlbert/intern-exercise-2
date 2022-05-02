(() =>
  window.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    hamburger.addEventListener("click", function () {
      this.classList.toggle("collapsed");
      this.nextElementSibling.classList.toggle("navbar-active");
    });

    function closeAvailableSubMenu() {
      submenuToggles.forEach((toggle) => {
        const submenu = toggle.parentElement.children[2];
        submenu.style.height = "0px";
      });
    }

    const submenuToggles = document.querySelectorAll(".sub-menu-toggle");
    submenuToggles.forEach((toggle) => {
      toggle.addEventListener("click", function () {
        closeAvailableSubMenu();
        const submenu = this.parentElement.children[2];
        if (submenu.getBoundingClientRect().height <= 1) {
          submenu.style.height = `${
            submenu.children[0].getBoundingClientRect().height *
            submenu.children.length
          }px`;
        } else {
          submenu.style.height = "0px";
        }
      });
    });

    const sliderItems = document.querySelectorAll(".slider-item");
    setInterval(function () {
      sliderItems.forEach((sliderItem) => {
        sliderItem.classList.toggle("slider-item-active");
      });
    }, 3000);
  }))();

window.onscroll = function () {
  scrollFunction();
};
const navbar = document.getElementById("navbar");
const navbarLogo = document.getElementById("navbar-logo");
const hamburgerSlices = document.querySelectorAll(".hamburger-slice");
const mainMenuItemLink = document.querySelectorAll(".main-menu-item-link");
const navyItem = document.querySelector(".navy-item");

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    navbar.classList.add("navbar-scroll");
    navbarLogo.classList.remove("invert");
    navbarLogo.classList.remove("brightness-0");
    hamburgerSlices.forEach((slice) => {
      slice.classList.add("hamburger-slice-scroll");
    });
    mainMenuItemLink.forEach((links) => {
      links.classList.add("main-menu-item-link-scroll");
    });
    navyItem.classList.remove("main-menu-item-link-scroll");
  } else {
    navbar.classList.remove("navbar-scroll");
    navbarLogo.classList.add("invert");
    navbarLogo.classList.add("brightness-0");
    hamburgerSlices.forEach((slice) => {
      slice.classList.remove("hamburger-slice-scroll");
    });
    mainMenuItemLink.forEach((links) => {
      links.classList.remove("main-menu-item-link-scroll");
    });
  }
}
