const greet = () => {
  return new Promise((resolve, reject) => {
    const greeting = document.querySelector('.greeting');

    const greetDown = () => {
      greeting.style.opacity = '0';
      greeting.style.top = '55%';
    };

    const greetUp = () => {
      greeting.style.opacity = '1';
      greeting.style.top = '50%';
    };

    const replaceMsg = (str) => {
      const greetingMsg = document.createElement('p');
      greetingMsg.textContent = str;

      greeting.replaceChildren(greetingMsg);
    };

    greetDown();

    setTimeout(() => {
      greetUp();
      replaceMsg(`안녕하세요 ${localStorage.getItem('userName')}님`);
    }, 800);

    setTimeout(() => {
      greetDown();
    }, 2400);

    setTimeout(() => {
      greetUp();
      replaceMsg(`여행을 시작합니다.`);
    }, 3200);

    setTimeout(() => {
      greetDown();
    }, 4800);

    setTimeout(() => {
      resolve();
    }, 6400);
  });
};

export default greet;
