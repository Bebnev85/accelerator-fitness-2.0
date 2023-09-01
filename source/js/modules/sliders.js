export const sliderCoachInit = () => {
  const swiper = new Swiper('.coach-swiper__container', {
    navigation: {
      nextEl: '.coach__swiper-button--next',
      prevEl: '.coach__swiper-button--prev',
    },

    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,
    slidesPerGroup: 1,

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

export const sliderReviewsInit = () => {
  const swiper = new Swiper('.reviews-swiper__container', {
    navigation: {
      nextEl: '.reviews__swiper-button--next',
      prevEl: '.reviews__swiper-button--prev',
    },

    watchSlidesProgress: true,
    loop: false,
    autoHeight: true,
    slidesPerView: 1,
  });
};
