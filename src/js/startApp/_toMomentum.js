import stop from './_stop';
import { onHideElemsDisplay, onBackImage, offStars, offGreeting } from './_toggleElems';

const flash = {
  screen: document.body,

  on: async function () {
    this.screen.style.backgroundColor = '#fff';
  },

  off: async function () {
    this.screen.style.backgroundColor = '#000';
  },
};

const toMomentum = async () => {
  await flash.on();

  offStars();
  offGreeting();

  await stop(2);

  await flash.off();

  await stop(4);

  onHideElemsDisplay();
  onBackImage();

  await stop(2);

  return;
};

export default toMomentum;
