const elements = document.querySelectorAll('[data-bg]');
export const initImgBg = () => {
  elements.forEach((item)=> {
    item.style.zIndex = '5';
    // item.children.forEach((child) => {
    //   child.style.zIndex = '10';
    // });
    const urlImage = item.dataset.bg;
    const img = document.createElement('img');
    img.classList.add('section-wrapper__img-background');
    img.src = urlImage;
    item.insertBefore(img, item.children[0]);
    img.zIndex = '9';
  });
};
