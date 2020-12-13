import 'regenerator-runtime/runtime';
import initUniverse from './initUniverse';
import initGreeting from './initGreeting';
import launchSpacecraft from './launchSpacecraft';

const init = () => {
  initUniverse();
  initGreeting();
  launchSpacecraft();
};

document.addEventListener('DOMContentLoaded', init, false);
