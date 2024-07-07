let openMenuButtons = document.querySelectorAll(".menu-toggle");
let mobileMenu = document.querySelector(".main-nav-mobile");

openMenuButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    if (this.classList.contains("open")) {
      this.classList.remove("open");
      mobileMenu.classList.remove("open");
    } else {
      this.classList.add("open");
      mobileMenu.classList.add("open");
    }
  });
});
