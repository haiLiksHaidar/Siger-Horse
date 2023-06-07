// toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di-klik
document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};
// toggle class active for search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
const searchButton = document.querySelector("#search-button");
const navbarExtra = document.querySelector(".search-form");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

document.addEventListener("click", function (e) {
  if (!searchButton.contains(e.target) && !navbarExtra.contains(e.target)) {
    navbarExtra.classList.remove("active");
  }
});
// klik di luar sidebar untuk meghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
     