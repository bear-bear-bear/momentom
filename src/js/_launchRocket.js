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

  toCenter: async function () {
    this.rocket.style.bottom = `50%`;
  },

  strongFire: async function () {
    this.rocket.classList.remove('rocket-fire');
    this.rocket.classList.add('rocket-fire--strong');
  },

  toTop: async function () {
    this.rocket.style.bottom = '200%';
  },
};

const stop = (s = 1) => new Promise((resolve) => setTimeout(resolve, s * 1000));

const launchRocket = async () => {
  await scene.on();
  await rocket.ready();
  await stop(3);
  await rocket.start();
  await stop(4);
  await rocket.toCenter();
  await stop(4);
  await rocket.strongFire();
  await stop(0.6);
  await rocket.toTop();
  await stop(2);
  // TODO: add Star move down animation
  // await scene.off();

  return;
};

export default launchRocket;
