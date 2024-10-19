let swiper = new Swiper(".mySwiper", {
   loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation:{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        500: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        600: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1000:{
            slidesPerView: 3,
          spaceBetween: 20,
        }
    }
  });