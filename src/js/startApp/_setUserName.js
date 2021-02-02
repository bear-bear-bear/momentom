import { createGreeting } from './_greet';

const setUserName = () => {
  return new Promise((resolve, reject) => {
    const setName = (e) => {
      e.preventDefault();
      greeting.removeEventListener('submit', setName);

      const name = greeting.querySelector('.greeting__input').value || 'Annonymous';

      window.localStorage.setItem('userName', name);

      resolve();
    };

    const greeting = document.querySelector('.greeting');
    greeting.addEventListener('submit', setName, false);
  });
};

export default setUserName;
