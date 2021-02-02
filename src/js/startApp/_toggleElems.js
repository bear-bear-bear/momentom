const onHideElemsDisplay = () => {
  const hideElems = document.querySelectorAll('.hide');

  hideElems?.forEach((elem) => elem.classList.remove('hide'));
};

const onBackImage = () => {
  document.body.classList.add('anime-done');
};

const offStars = () => {
  const starsWrap = document.querySelector('.stars-wrap');

  starsWrap?.remove();
};

const offGreeting = () => {
  const greeting = document.querySelector('.greeting');

  greeting?.remove();
};

export { onHideElemsDisplay, onBackImage, offStars, offGreeting };
