import initUniverse from './_initUniverse';
import setUserName from './_setUserName';
import { createGreeting, greet } from './_greet';
import launchRocket from './_launchRocket';
import toMomentum from './_toMomentum';
import { onHideElemsDisplay, onBackImage, offGreeting } from './_toggleElems';

const startApp = async () => {
  const isUser = Boolean(window.localStorage.getItem('userName'));

  if (isUser === true) {
    offGreeting();
    onBackImage();
    onHideElemsDisplay();
  } else {
    initUniverse();
    await createGreeting();
    await setUserName();
    await greet();
    await launchRocket();
    await toMomentum();
  }
  // window.localStorage.clear(); // 임시
};

export default startApp;
