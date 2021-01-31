import 'regenerator-runtime/runtime';
import startApp from './startApp/startApp';

const init = async () => {
  await startApp();

  console.log('hi');
};

document.addEventListener('DOMContentLoaded', init, false);
