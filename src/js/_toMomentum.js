import stop from './_stop';

const flash = {
  screen: document.body,

  on: async function () {
    this.screen.style.backgroundColor = '#fff';
  },

  off: async function () {
    this.screen.style.backgroundColor = '#000';
  },
};

const removeStars = () => {
  const starsWrap = document.querySelector('.stars-wrap');

  starsWrap?.remove();
};

const onElementsDisplay = () => {
  const hideElems = document.querySelectorAll('.hide');

  hideElems?.forEach((elem) => elem.classList.remove('hide'));
};

const clearAnimeArticle = async () => {
  // await flash.on();
  // await stop(1);

  removeStars();
  onElementsDisplay();

  // await stop(1);
  // await flash.off();

  return;
};

export default clearAnimeArticle;
