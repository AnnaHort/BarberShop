new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  // автопрокрутка
  autoplay: {
    // // пауза між прокруткою
    delay: 3000,
    //     // закінчити на останньому слайді
    stopOnLastSlide: true,
    //     // відключити після ручного переключення
    disableOnInteraction: false,
  },
  // швидікість автопрокруту
  speed: 800,

//   БРЕКПОІНТ / АДАПТИВ /
//   ширина екрану
//   (виставити значення slidesPerView: 'auto')
    breakpoints: {
      375: {
        slidesPreView: 1,
      },
      768: {
        slidesPerView: 2,
      },
       1024: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
});
