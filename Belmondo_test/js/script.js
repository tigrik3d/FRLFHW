document.addEventListener("click", function (e) {
  const targetElement = e.target;

  if (targetElement.closest(".menu-icon")) {
    document.documentElement.classList.toggle("menu-open");
    e.preventDefault();
  }
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  speed: 1000,
  effect: "fade",

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },
  autoplay: {
    delay: 3000,
  },
});
