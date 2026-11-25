const VARIANT = 5;
const SYSTEM_KEY = 'systemInfo';
const CLOSED_KEY = 'lab4-vanilla-contact-closed';

// Відкриті браузером відомості; доступ до пристроїв не запитується.
async function saveSystemInfo() {
  const info = {
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    appVersion: navigator.appVersion,
    appName: navigator.appName,
    vendor: navigator.vendor,
    language: navigator.language,
    languages: navigator.languages,
    cookieEnabled: navigator.cookieEnabled,
    onLine: navigator.onLine,
    hardwareConcurrency: navigator.hardwareConcurrency,
    deviceMemory: navigator.deviceMemory ?? 'Не надано браузером',
    maxTouchPoints: navigator.maxTouchPoints,
    doNotTrack: navigator.doNotTrack ?? 'Не надано браузером',
    screen: {
      width: screen.width, height: screen.height,
      availWidth: screen.availWidth, availHeight: screen.availHeight,
      colorDepth: screen.colorDepth, pixelDepth: screen.pixelDepth,
    },
    devicePixelRatio: window.devicePixelRatio,
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  };
  if (navigator.userAgentData) {
    info.userAgentData = navigator.userAgentData.toJSON();
    try {
      info.userAgentData = {
        ...info.userAgentData,
        ...await navigator.userAgentData.getHighEntropyValues([
          'architecture', 'bitness', 'model', 'platformVersion', 'fullVersionList',
        ]),
      };
    } catch { /* Додаткові відомості можуть бути недоступні. */ }
  }
  try {
    localStorage.setItem(SYSTEM_KEY, JSON.stringify(info));
    renderStorage();
  } catch {
    document.getElementById('storage-status').textContent =
      'Браузер не дозволив зберегти або прочитати localStorage.';
  }
}

// Виводимо всі пари localStorage, не змінюючи сторонні ключі.
function renderStorage() {
  const list = document.getElementById('storage-data');
  list.replaceChildren();
  Object.keys(localStorage).forEach((key) => {
    const term = document.createElement('dt');
    const detail = document.createElement('dd');
    const value = document.createElement('pre');
    const stored = localStorage.getItem(key);
    term.textContent = key;
    try { value.textContent = JSON.stringify(JSON.parse(stored), null, 2); }
    catch { value.textContent = stored; }
    detail.append(value);
    list.append(term, detail);
  });
}

async function loadReviews() {
  const status = document.getElementById('reviews-status');
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${VARIANT}/comments`);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const comments = await response.json();
    if (!Array.isArray(comments)) throw new Error('Некоректна відповідь сервера');
    const list = document.getElementById('reviews-list');
    list.replaceChildren();
    comments.forEach((comment) => {
      const article = document.createElement('article');
      article.className = 'review';
      const title = document.createElement('h3');
      const email = document.createElement('p');
      const body = document.createElement('p');
      title.textContent = comment.name;
      email.className = 'muted';
      email.textContent = comment.email;
      body.textContent = comment.body;
      article.append(title, email, body);
      list.append(article);
    });
    status.textContent = comments.length ? '' : 'Відгуків поки немає.';
  } catch {
    status.textContent = 'Не вдалося завантажити відгуки. Перевірте інтернет і оновіть сторінку.';
  }
}

// Межі: 07:00 включно, 21:00 не включно, час пристрою відвідувача.
function themeByTime(date = new Date()) {
  const hour = date.getHours();
  return hour >= 7 && hour < 21 ? 'light' : 'dark';
}
function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const button = document.getElementById('theme-toggle');
  button.textContent = theme === 'dark' ? 'Увімкнути денну тему' : 'Увімкнути нічну тему';
  button.setAttribute('aria-pressed', String(theme === 'dark'));
}
let timeTheme = themeByTime();
applyTheme(timeTheme);
document.getElementById('theme-toggle').addEventListener('click', () => {
  applyTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark');
});
// Ручний вибір діє до наступного переходу день/ніч.
setInterval(() => {
  const next = themeByTime();
  if (next !== timeTheme) { timeTheme = next; applyTheme(next); }
}, 60_000);

const modal = document.getElementById('contact-modal');
function wasClosed() {
  try { return sessionStorage.getItem(CLOSED_KEY) === 'true'; }
  catch { return false; }
}
function rememberClosed() {
  try { sessionStorage.setItem(CLOSED_KEY, 'true'); }
  catch { /* Решта сторінки працює й без sessionStorage. */ }
}
const modalTimer = setTimeout(() => {
  if (!wasClosed() && !modal.open) modal.showModal();
}, 60_000);
document.getElementById('open-contact').addEventListener('click', () => {
  clearTimeout(modalTimer);
  if (!modal.open) modal.showModal();
});
document.getElementById('close-contact').addEventListener('click', () => modal.close());
modal.addEventListener('close', () => { clearTimeout(modalTimer); rememberClosed(); });

document.getElementById('contact-form').addEventListener('submit', (event) => {
  const endpoint = event.currentTarget.getAttribute('action');
  if (!/^https:\/\/formspree\.io\/f\/[a-zA-Z0-9]+$/.test(endpoint)) {
    event.preventDefault();
    document.getElementById('form-status').textContent =
      'Форму ще не підключено до пошти. Потрібно вказати особистий endpoint Formspree.';
    return;
  }
  rememberClosed();
  // Після перевірки браузер виконає стандартний POST на Formspree.
});

saveSystemInfo();
loadReviews();
