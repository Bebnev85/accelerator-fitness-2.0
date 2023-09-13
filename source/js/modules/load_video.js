export const initVideo = () => {
  const button = document.querySelector('.main-section__gim-video-conatainer').querySelector('button');
  const video = document.getElementById('video');
  if (button) {
    button.addEventListener('click', () => {
      if (video) {
        const src = video.dataset.src;
        video.style.height = '100%';
        video.insertAdjacentHTML('afterbegin', '<iframe src="' + src + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>');
      }
    });
  }
};
