const greeting = {
  greeting: document.querySelector('.greeting'),

  down: async function () {
    console.log(greeting);
    this.greeting.style.opacity = '0';
    this.greeting.style.top = '52%';
  },

  up: async function () {
    this.greeting.style.opacity = '1';
    this.greeting.style.top = '50%';
  },

  replaceMsg: async function (str) {
    this.greeting.textContent = str;
  },
};

const greet = async () => {
  const stop = (s = 1) => new Promise((resolve) => setTimeout(resolve, s * 1000));

  await greeting.down();
  await stop(0.8);

  greeting.replaceMsg(`안녕하세요 ${localStorage.getItem('userName')}님`);

  await greeting.up();
  await stop(1.6);
  await greeting.down();
  await stop(0.8);

  greeting.replaceMsg(`여행을 시작합니다.`);

  await greeting.up();
  await stop(1.6);
  await greeting.down();

  await stop(1.6);

  return;
};

export default greet;
