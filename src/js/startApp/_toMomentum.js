import stop from './_stop';
import onElems from './_onElems';

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

const toMomentum = async () => {
  await flash.on();

  removeStars();

  await stop(2);

  onElems();

  await flash.off();

  return;
};

export default toMomentum;
