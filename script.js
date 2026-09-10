const menu = document.querySelector('.menu');
const nav = document.querySelector('#navLinks');

menu?.addEventListener('click', () => nav.classList.toggle('open'));
nav?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

const messageForm = document.querySelector('#messageForm');
messageForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(messageForm);
  const subject = `Portfolio message from ${data.get('name')}`;
  const body = `Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`;
  window.location.href = `mailto:puppalatejasri2007@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
