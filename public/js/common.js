$(".header_menu").click(function () {
  $(this).toggleClass("active");
  $(".header_nav").toggleClass("active");
});

var swiperBanner = new Swiper(".banner_swiper", {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  speed: 1000,
});

var swiperAd = new Swiper(".footer_ad_swiper", {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  speed: 1000,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});
