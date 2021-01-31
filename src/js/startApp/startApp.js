import initUniverse from './_initUniverse';
import setUserName from './_setUserName';
import greet from './_greet';
import launchRocket from './_launchRocket';
import toMomentum from './_toMomentum';
import onElems from './_onElems';

const startApp = async () => {
  const isUser = Boolean(window.localStorage.getItem('userName'));

  if (isUser === true) {
    onElems();
  } else {
    initUniverse();
    await setUserName();
    await greet();
    await launchRocket();
    await toMomentum();
  }
  // window.localStorage.clear(); // 임시
};

export default startApp;
