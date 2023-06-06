// toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di-klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar sidebar untuk meghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

function animateOnScroll(entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
      observer.unobserve(entry.target);
    }
  });
}

var room = document.querySelector(".room");

var observer = new IntersectionObserver(animateOnScroll, {
  root: null,
  threshold: 0.3, // Adjust the threshold as per your needs
});

observer.observe(room);
