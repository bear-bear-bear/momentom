import initUniverse from './initUniverse';
import greeting from './greeting';

const init = () => {
  initUniverse();
  askName();
};

document.addEventListener('DOMContentLoaded', init, false);
