import 'regenerator-runtime/runtime';
import initUniverse from './initUniverse';
import initGreeting from './initGreeting';
import launchRocket from './launchRocket';

const init = async () => {
  initUniverse();
  await initGreeting();
  launchRocket();
};

document.addEventListener('DOMContentLoaded', init, false);

window.localStorage.clear(); // 임시
