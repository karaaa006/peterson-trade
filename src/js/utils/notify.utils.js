const notifyRef = document.querySelector('.notify');

export const notify = (message, type = 'info') => {
  notifyRef.innerHTML = message;
  notifyRef.classList.add(type);
  notifyRef.classList.add('active');
  setTimeout(() => {
    notifyRef.innerHTML = '';
    notifyRef.classList.remove(type);
    notifyRef.classList.remove('active');
  }, 3000);
};
