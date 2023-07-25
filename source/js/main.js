import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';
import {sliderCoachInit, sliderReviewsInit} from './modules/sliders';
import {initTabs, tabs} from './utils/tabs/init-tabs';
import {accordions, initAccordions} from './utils/acordion/init-accordion';


const button = document.querySelector('.main-section__gim-video-conatainer');
const video = document.getElementById('video');

const getElementDataAttr = (value) => document.querySelector('div[data-block="' + value + '"]');
// const tabs = getElementDataAttr('tab-triggers');

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    const form = new Form();
    window.form = form;
    form.init();
  });

  // Видео

  button.addEventListener('click', () => {
    const src = video.dataset.src;
    video.style.height = '100%';
    video.insertAdjacentHTML('afterbegin', '<iframe src="' + src + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>');
  });

  // Табы

  initTabs();

  // tabs.addEventListener('click', (evt) => {
  //   evt.preventDefault();
  //   let link = evt.target;
  //   while (link.dataset.block !== 'tab-triggers') {
  //     if (link.tagName.toLowerCase() === 'a') {
  //       let id = link.getAttribute('href');
  //       id = String(id).replace('#', '');
  //       const content = document.getElementById(id);
  //       tabs.querySelector('.tabs__trigger-item--active').classList.remove('tabs__trigger-item--active');
  //       document.querySelector('.tabs__content-item--active').classList.remove('tabs__content-item--active');
  //       link.classList.add('tabs__trigger-item--active');
  //       content.classList.add('tabs__content-item--active');
  //       return;
  //     } else {
  //       link = link.parentElement;
  //     }
  //   }
  // });

  sliderCoachInit();

  initAccordions();

  sliderReviewsInit();

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
