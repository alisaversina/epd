document.addEventListener('DOMContentLoaded', () => {
  const userLang = navigator.language || navigator.userLanguage;
  const currentPath = window.location.pathname;
  if (currentPath === '/epd/' || currentPath === '/epd/index.html') {
    if (userLang.startsWith('ru')) {
      window.location.href = '/epd/ru/index.html';
    } else if (userLang.startsWith('de')) {
      window.location.href = '/epd/de/index.html';
    }
  }
});
