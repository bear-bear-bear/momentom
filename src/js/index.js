import initUniverse from './initUniverse';
import initGreeting from './initGreeting';

const init = () => {
  initUniverse();
  initGreeting();
};

document.addEventListener('DOMContentLoaded', init, false);
