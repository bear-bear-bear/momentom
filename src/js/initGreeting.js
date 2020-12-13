const initGreeting = () => {
  const greetingForm = document.querySelector('.greeting');
  const localStorage = window.localStorage;
  return new Promise((resolve, reject) => {
    const setHideGreeting = () => {
      const greetingNode = document.createElement('p');

      greetingNode.textContent = `안녕하세요 ${localStorage.getItem('userName')}님`;
      greetingNode.classList.add('hide');
      greetingNode.classList.add('greeting');

      greetingForm.parentNode.replaceChild(greetingNode, greetingForm);

      resolve();
    };

    const handlegreetingForm = (e) => {
      e.preventDefault();
      greetingForm.removeEventListener('submit', handlegreetingForm);

      const name = greetingForm.querySelector('.greeting__input').value || 'Annonymous';
      localStorage.setItem('userName', name);

      setHideGreeting();
    };

    const userName = localStorage.getItem('userName');

    if (userName) setHideGreeting();
    else greetingForm.addEventListener('submit', handlegreetingForm, false);
  });
};

export default initGreeting;
