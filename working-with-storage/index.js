import { storage } from './storage';

const ls = storage('local');
const ss = storage('session');

const app = document.getElementById('app');
app.innerHTML = `
  <h1>JavaScript HTML5 APIs</h1>

  <div style='display: none' data-cookie>
    <p>Would you like a cookie? 🍪</p>
    <button type='button' data-cookie-accept>Yes</button>
    <button type='button' data-cookie-reject>No</button>
  </div>
`;

const init = () => {
  const cookie = document.querySelector('[data-cookie]');
  const accept = document.querySelector('[data-cookie-accept]');
  const reject = document.querySelector('[data-cookie-reject]');

  const showCookie = () => (cookie.style.display = 'block');
  const hideCookie = () => (cookie.style.display = 'none');

  accept.addEventListener('click', () => {
    hideCookie();
    ls.set('cookies', true);
  });

  reject.addEventListener('click', () => {
    hideCookie();
    ss.set('cookies', false);
  });

  if (!cookie || ls.get('cookies') || ss.get('cookies') === false) {
    return;
  }

  setTimeout(showCookie, 2000);
};

if (ls.isSupported && ss.isSupported) {
  init();
}
