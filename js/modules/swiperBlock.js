export const swiperBlock = (blockSW) =>{
    new Swiper(blockSW, {
      autoplay: {
        delay: 3000,
      },
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  spaceBetween: 16,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
  /* breakpoints: {
    // when window width is >= 320px
    0: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    // when window width is >= 480px
    860: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    // when window width is >= 640px
    1280: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
  }, */
});
}