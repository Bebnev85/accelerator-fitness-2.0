const button = document.querySelector('.main-section__gim-video-conatainer');
const video = document.getElementById('video');

export const initVideo = () => {
  button.addEventListener('click', () => {
    const src = video.dataset.src;
    video.style.height = '100%';
    video.insertAdjacentHTML('afterbegin', '<iframe src="' + src + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>');
  });
};
