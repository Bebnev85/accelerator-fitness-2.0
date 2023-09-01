export const initImgBg = () => {
  let elements = document.querySelectorAll('[data-bgdesctop]');
  const mediaQuery = window.matchMedia('(max-width: 1199px)');
  if (mediaQuery.matches) {
    elements = document.querySelectorAll('[data-bgtablet]');
  }

  elements.forEach((item)=> {
    item.style.zIndex = '5';
    const img = document.createElement('img');
    img.classList.add('section-wrapper__img-background');
    if (mediaQuery.matches) {
      img.src = item.dataset.bgtablet;
    } else {
      img.src = item.dataset.bgdesctop;
    }
    item.insertBefore(img, item.children[0]);
    img.zIndex = '9';
  });
};
