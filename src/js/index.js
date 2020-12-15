import 'regenerator-runtime/runtime';
import initUniverse from './initUniverse';
import setUserName from './setUserName';
import greet from './greet';
import launchRocket from './launchRocket';

const init = async () => {
  initUniverse();
  if (!window.localStorage.getItem('userName')) {
    await setUserName();
    await greet();
    // await launchRocket();
  }
  launchRocket();
  console.log('마지막동작'); // 임시
};

document.addEventListener('DOMContentLoaded', init, false);

// window.localStorage.clear(); // 임시
