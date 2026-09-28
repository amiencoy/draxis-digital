const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('.site-nav');
const themeToggle = document.querySelector('.theme-toggle');
const themeColor = document.querySelector('meta[name="theme-color"]');

function setTheme(theme, persist = false) {
  document.documentElement.dataset.theme = theme;
  themeToggle?.setAttribute(
    'aria-label',
    theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme',
  );
  themeColor?.setAttribute('content', theme === 'dark' ? '#120b22' : '#f8f5ff');
  if (persist) localStorage.setItem('draxis-theme', theme);
}

setTheme(document.documentElement.dataset.theme || 'light');

themeToggle?.addEventListener('click', () => {
  setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark', true);
});

function closeMenu({ restoreFocus = false } = {}) {
  menuButton?.setAttribute('aria-expanded', 'false');
  menuButton?.querySelector('.sr-only')?.replaceChildren('Open menu');
  navigation?.classList.remove('is-open');
  document.body.classList.remove('menu-open');
  if (restoreFocus) menuButton?.focus();
}

menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  menuButton.querySelector('.sr-only')?.replaceChildren(open ? 'Open menu' : 'Close menu');
  navigation?.classList.toggle('is-open', !open);
});

navigation?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));

document.addEventListener('click', (event) => {
  if (
    menuButton?.getAttribute('aria-expanded') === 'true'
    && !navigation?.contains(event.target)
    && !menuButton.contains(event.target)
  ) {
    closeMenu();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuButton?.getAttribute('aria-expanded') === 'true') {
    closeMenu({ restoreFocus: true });
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 900) closeMenu();
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

document.querySelector('[data-year]').textContent = new Date().getFullYear();
