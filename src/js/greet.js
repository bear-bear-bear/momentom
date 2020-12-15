const greet = async () => {
  const greeting = document.querySelector('.greeting');

  const greetDown = () => {
    greeting.style.opacity = '0';
    greeting.style.top = '52%';
  };

  const greetUp = () => {
    greeting.style.opacity = '1';
    greeting.style.top = '50%';
  };

  const replaceMsg = (str) => {
    greeting.textContent = str;
  };

  const textMove = (moveFunc, ms = 800) => {
    return new Promise((resolve) => {
      moveFunc();
      setTimeout(resolve, ms);
    });
  };
  const stop = (ms = 800) => new Promise((resolve) => setTimeout(resolve, ms));

  await textMove(greetDown);

  replaceMsg(`안녕하세요 ${localStorage.getItem('userName')}님`);

  await textMove(greetUp);
  await stop();
  await textMove(greetDown);

  replaceMsg(`여행을 시작합니다.`);

  await textMove(greetUp);
  await stop();
  await textMove(greetDown);

  await stop();

  return;
};

export default greet;
