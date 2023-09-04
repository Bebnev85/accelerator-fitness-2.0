import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';
import {sliderCoachInit, sliderReviewsInit} from './modules/sliders';
import {initTabs} from './utils/tabs/init-tabs';
import {initAccordions} from './utils/acordion/init-accordion';
import {initImgBg} from './modules/init-bg-image';
import {initVideo} from './modules/load_video';


// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана

  // Инициализация фонового изображения

  window.addEventListener('load', () => {
    initImgBg();
    initTabs();
    initModals();
    initVideo();
    sliderCoachInit();
    sliderReviewsInit();
    initAccordions();
  });

  // Видео


  // Табы


  // Слайдеры


  // Аккордеон


  // Форма

  const form = new Form();
  form.init();
  window.form = form;
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
