import Swiper from '../vendor/swiper';

export const sliderCoachInit = () => {
  const SWIPER = new Swiper('.coach-swiper__container', {
    navigation: {
      nextEl: '.coach-swiper__button--next',
      prevEl: '.coach-swiper__button--prev',
    },

    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    slidesPerGroup: 1,

    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 40,
        allowTouchMove: false,
      },
    },
  });
  return SWIPER;
};

export const sliderReviewsInit = () => {
  const SWIPER = new Swiper('.reviews-swiper__container', {
    navigation: {
      nextEl: '.reviews-swiper__button--next',
      prevEl: '.reviews-swiper__button--prev',
    },

    watchSlidesProgress: true,
    loop: false,
    autoHeight: true,
    slidesPerView: 1,

    breakpoints: {
      1200: {
        allowTouchMove: false,
      },
    },
  });
  return SWIPER;
};
