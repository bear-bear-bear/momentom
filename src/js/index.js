import 'regenerator-runtime/runtime';
import initUniverse from './initUniverse';
import initGreetingMsg from './initGreetingMsg';
import launchRocket from './launchRocket';

const init = async () => {
  initUniverse();
  await initGreetingMsg();
  // await greet();
  launchRocket();
};

document.addEventListener('DOMContentLoaded', init, false);

window.localStorage.clear(); // 임시
