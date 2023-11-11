// toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di-klik
document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};
// klik di luar sidebar untuk meghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
// Modal box
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  };
});

document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};

window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
  if (e.target === itemDetailModal2) {
    itemDetailModal2.style.display = "none";
  }
  if (e.target === itemDetailModal3) {
    itemDetailModal3.style.display = "none";
  }
  if (e.target === itemDetailModal4) {
    itemDetailModal4.style.display = "none";
  }
  if (e.target === itemDetailModal5) {
    itemDetailModal5.style.display = "none";
  }
  if (e.target === itemDetailModal6) {
    itemDetailModal6.style.display = "none";
  }
  if (e.target === itemDetailModal7) {
    itemDetailModal7.style.display = "none";
  }
  if (e.target === itemDetailModal8) {
    itemDetailModal8.style.display = "none";
  }
  if (e.target === itemDetailModal9) {
    itemDetailModal9.style.display = "none";
  }
  if (e.target === itemDetailModal10) {
    itemDetailModal10.style.display = "none";
  }
  if (e.target === itemDetailModal11) {
    itemDetailModal11.style.display = "none";
  }
  if (e.target === itemDetailModal12) {
    itemDetailModal12.style.display = "none";
  }
};

// Modal box2
const itemDetailModal2 = document.querySelector("#item-detail-modal2");
const itemDetailButtons2 = document.querySelectorAll(".item-detail-button2");

itemDetailButtons2.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal2.style.display = "flex";
    e.preventDefault();
  };
});

document.querySelector(".modal2 .close-icon2").onclick = (e) => {
  itemDetailModal2.style.display = "none";
  e.preventDefault();
};

// Modal box3
const itemDetailModal3 = document.querySelector("#item-detail-modal3");
const itemDetailButtons3 = document.querySelectorAll(".item-detail-button3");

itemDetailButtons3.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal3.style.display = "flex";
    e.preventDefault();
  };
});

document.querySelector(".modal3 .close-icon3").onclick = (e) => {
  itemDetailModal3.style.display = "none";
  e.preventDefault();
};
// Modal box4
const itemDetailModal4 = document.querySelector("#item-detail-modal4");
const itemDetailButtons4 = document.querySelectorAll(".item-detail-button4");

itemDetailButtons4.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal4.style.display = "flex";
    e.preventDefault();
  };
});

document.querySelector(".modal4 .close-icon4").onclick = (e) => {
  itemDetailModal4.style.display = "none";
  e.preventDefault();
};
// Modal box5
const itemDetailModal5 = document.querySelector("#item-detail-modal5");
const itemDetailButtons5 = document.querySelectorAll(".item-detail-button5");

itemDetailButtons5.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal5.style.display = "flex";
    e.preventDefault();
  };
});

document.querySelector(".modal5 .close-icon5").onclick = (e) => {
  itemDetailModal5.style.display = "none";
  e.preventDefault();
};
// 5 bawah
// Modal box6
const itemDetailModal6 = document.querySelector("#item-detail-modal6");
const itemDetailButtons6 = document.querySelectorAll(".item-detail-button6");

itemDetailButtons6.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal6.style.display = "flex";
    e.preventDefault();
  };
});

document.querySelector(".modal6 .close-icon6").onclick = (e) => {
  itemDetailModal6.style.display = "none";
  e.preventDefault();
};
// 1
// Modal box7
const itemDetailModal7 = document.querySelector("#item-detail-modal7");
const itemDetailButtons7 = document.querySelectorAll(".item-detail-button7");

itemDetailButtons7.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal7.style.display = "flex";
    e.preventDefault();
  };
});

document.querySelector(".modal7 .close-icon7").onclick = (e) => {
  itemDetailModal7.style.display = "none";
  e.preventDefault();
};
// 2
// Modal box8
const itemDetailModal8 = document.querySelector("#item-detail-modal8");
const itemDetailButtons8 = document.querySelectorAll(".item-detail-button8");

itemDetailButtons8.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal8.style.display = "flex";
    e.preventDefault();
  };
});

document.querySelector(".modal8 .close-icon8").onclick = (e) => {
  itemDetailModal8.style.display = "none";
  e.preventDefault();
};
// 3
// Modal box9
const itemDetailModal9 = document.querySelector("#item-detail-modal9");
const itemDetailButtons9 = document.querySelectorAll(".item-detail-button9");

itemDetailButtons9.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal9.style.display = "flex";
    e.preventDefault();
  };
});

document.querySelector(".modal9 .close-icon9").onclick = (e) => {
  itemDetailModal9.style.display = "none";
  e.preventDefault();
};
// 4
// Modal box10
const itemDetailModal10 = document.querySelector("#item-detail-modal10");
const itemDetailButtons10 = document.querySelectorAll(".item-detail-button10");

itemDetailButtons10.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal10.style.display = "flex";
    e.preventDefault();
  };
});

document.querySelector(".modal10 .close-icon10").onclick = (e) => {
  itemDetailModal10.style.display = "none";
  e.preventDefault();
};
// Modal box11
const itemDetailModal11 = document.querySelector("#item-detail-modal11");
const itemDetailButtons11 = document.querySelectorAll(".item-detail-button11");

itemDetailButtons11.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal11.style.display = "flex";
    e.preventDefault();
  };
});

document.querySelector(".modal11 .close-icon11").onclick = (e) => {
  itemDetailModal11.style.display = "none";
  e.preventDefault();
};
// Modal box12
const itemDetailModal12 = document.querySelector("#item-detail-modal12");
const itemDetailButtons12 = document.querySelectorAll(".item-detail-button12");

itemDetailButtons12.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal12.style.display = "flex";
    e.preventDefault();
  };
});

document.querySelector(".modal12 .close-icon12").onclick = (e) => {
  itemDetailModal12.style.display = "none";
  e.preventDefault();
};
