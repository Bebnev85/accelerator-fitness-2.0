export const sliderCoachInit = () => {
  const swiper = new Swiper('.coach-swiper__container', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,
    slidesPerGroup: 1,

    navigation: {
      nextEl: '.coach-swiper__button-next',
      prevEl: '.coach-swiper__button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 40,
      },
    },
  });
};
