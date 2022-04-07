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
