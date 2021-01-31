const setUserName = () => {
  return new Promise((resolve, reject) => {
    const greeting = document.querySelector('.greeting');

    greeting.innerHTML = `
<label class="greeting__label" for="name">이름을 입력해주세요</label>
<input class="greeting__input" id="name" type="text" minlength="1" maxlength="20" autocomplete="off">
`.trim();

    const setName = (e) => {
      e.preventDefault();
      greeting.removeEventListener('submit', setUserName);

      const name = greeting.querySelector('.greeting__input').value || 'Annonymous';

      window.localStorage.setItem('userName', name);

      resolve();
    };

    greeting.addEventListener('submit', setName, false);
  });
};

export default setUserName;
