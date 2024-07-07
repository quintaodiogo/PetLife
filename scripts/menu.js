let openMenuButtons = document.querySelectorAll(".menu-toggle");
let mobileMenu = document.querySelector(".main-nav-mobile");
let links = document.querySelectorAll(".links");

function toggleMenu() {
    openMenuButtons.forEach(button => {
        if (button.classList.contains("open")) {
            button.classList.remove("open");
            mobileMenu.classList.remove("open");
        } else {
            button.classList.add("open");
            mobileMenu.classList.add("open");
        }
    });
}

openMenuButtons.forEach(function (button) {
  button.addEventListener("click", toggleMenu);
});

links.forEach(function (link) {
  link.addEventListener("click", function () {
    openMenuButtons.forEach(button => button.classList.remove("open"));
    mobileMenu.classList.remove("open");
  });
});
