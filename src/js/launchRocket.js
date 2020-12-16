const scene = {
  scene: document.body.querySelector('.scene'),

  on: async function () {
    this.scene.classList.remove('hide');
  },

  off: async function () {
    this.scene.parentNode.removeChild(this.scene);
  },
};

const rocket = {
  rocket: document.body.querySelector('.rocket'),

  ready: async function () {
    this.rocket.style.bottom = '0';
  },

  start: async function () {
    this.rocket.classList.add('rocket-fire');
    this.rocket.style.animation = 'shake 0.15s ease infinite';
    this.rocket.style.animationDelay = '3s';
  },

  moveUp: async function () {
    for (let i = 0; i < 50; i++) {
      this.rocket.style.bottom = `${i}%`;
    }
  },
};

const stop = (ms = 1000) => new Promise((resolve) => setTimeout(resolve, ms));

const launchRocket = async () => {
  await scene.on();
  await rocket.ready();
  await stop(4000);
  await rocket.start();
  await stop(3000);
  await rocket.moveUp();
  // await scene.off();

  return;
};

export default launchRocket;
