```javascript
document.addEventListener('DOMContentLoaded', () => {
  const userLang = navigator.language || navigator.userLanguage;
  const currentPath = window.location.pathname;
  if (!currentPath.includes('/ru') && !currentPath.includes('/en') && !currentPath.includes('/de')) {
    if (userLang.startsWith('en')) {
      window.location.href = '/epd/en/';
    } else if (userLang.startsWith('de')) {
      window.location.href = '/epd/de/';
    } else {
      window.location.href = '/epd/ru/';
    }
  }
});
```
