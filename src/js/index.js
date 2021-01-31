import 'regenerator-runtime/runtime';
import startApp from './startApp/startApp';
import setData from './setData/setData';

const init = async () => {
  await startApp();
  setData();
};

document.addEventListener('DOMContentLoaded', init, false);
