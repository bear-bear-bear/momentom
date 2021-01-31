import 'regenerator-runtime/runtime';
import initUniverse from './_initUniverse';
import setUserName from './_setUserName';
import greet from './_greet';
import launchRocket from './_launchRocket';

const init = async () => {
  initUniverse();
  if (!window.localStorage.getItem('userName')) {
    await setUserName();
    await greet();
    // await launchRocket();
  }
  launchRocket(); // 임시
  console.log('마지막동작'); // 임시
};

document.addEventListener('DOMContentLoaded', init, false);

// window.localStorage.clear(); // 임시
