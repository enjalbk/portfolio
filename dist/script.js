const menuButton = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('#mobile-nav');

function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
  mobileNav.hidden = true;
}

menuButton.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!expanded));
  menuButton.setAttribute('aria-label', expanded ? 'Open navigation' : 'Close navigation');
  mobileNav.hidden = expanded;
});
mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !mobileNav.hidden) {
    closeMenu();
    menuButton.focus();
  }
});
document.addEventListener('click', event => {
  if (!event.target.closest('.site-header')) closeMenu();
});
window.matchMedia('(min-width: 851px)').addEventListener('change', event => {
  if (event.matches) closeMenu();
});

const filterButtons = document.querySelectorAll('.filter-button');
const skillCards = document.querySelectorAll('.skill-card');
filterButtons.forEach(button => button.addEventListener('click', () => {
  filterButtons.forEach(item => {
    item.classList.toggle('is-active', item === button);
    item.setAttribute('aria-pressed', String(item === button));
  });
  let visible = 0;
  skillCards.forEach(card => {
    card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter;
    if (!card.hidden) visible++;
  });
  document.querySelector('#filter-status').textContent = `${visible} skill categories shown.`;
}));

document.querySelector('.copy-email').addEventListener('click', async () => {
  const status = document.querySelector('#copy-status');
  try {
    await navigator.clipboard.writeText('enjalbk@gmail.com');
    status.textContent = 'Email copied. Talk soon!';
  } catch {
    status.textContent = 'Select the email address to copy it, or click it to open your email app.';
  }
});

if ('IntersectionObserver' in window) {
  const links = document.querySelectorAll('.desktop-nav .nav-link');
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      links.forEach(link => {
        const active = link.getAttribute('href') === `#${entry.target.id}`;
        link.classList.toggle('active', active);
        if (active) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-20% 0px -60% 0px', threshold: 0 });
  document.querySelectorAll('main > section[id]').forEach(section => sectionObserver.observe(section));

  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(element => {
      element.classList.add('is-prepared');
      revealObserver.observe(element);
    });
  }
}
document.querySelector('#year').textContent = new Date().getFullYear();
