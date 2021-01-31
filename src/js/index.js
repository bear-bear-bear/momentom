import 'regenerator-runtime/runtime';
import initUniverse from './_initUniverse';
import setUserName from './_setUserName';
import greet from './_greet';
import launchRocket from './_launchRocket';
import toMomentum from './_toMomentum';

const init = async () => {
  initUniverse();

  const loginDone = Boolean(window.localStorage.getItem('userName'));

  if (loginDone === false) {
    await setUserName();
    await greet();
    await launchRocket();
  }

  await toMomentum();
};

document.addEventListener('DOMContentLoaded', init, false);

// window.localStorage.clear(); // 임시
