/* ─── Scroll-reveal ─────────────────────────── */
const revealTargets = document.querySelectorAll(
  '.hero-headline, .hero-sub, .hero-presented, ' +
  '.contents-title, .contents-desc, .contents-item, ' +
  '.intro-quote, .intro-img, ' +
  '.about-title, .profile-desc, .meta-item, ' +
  '.inquiry-card, ' +
  '.method-step, ' +
  '.work-item, ' +
  '.contact-headline, .contact-item'
);

revealTargets.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver(
  entries => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 60);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

revealTargets.forEach(el => observer.observe(el));

/* ─── Mobile menu ────────────────────────────── */
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu  = document.getElementById('closeMenu');
const mmLinks    = document.querySelectorAll('.mm-link');

hamburger.addEventListener('click', () => mobileMenu.classList.add('open'));
closeMenu.addEventListener('click', () => mobileMenu.classList.remove('open'));
mmLinks.forEach(link => link.addEventListener('click', () => mobileMenu.classList.remove('open')));

/* ─── Active nav highlight on scroll ────────── */
const sections  = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a');

const activateLink = () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
  });
  navLinks.forEach(a => {
    a.style.color = '';
    if (a.getAttribute('href') === '#' + current) a.style.color = 'var(--accent)';
  });
};

window.addEventListener('scroll', activateLink, { passive: true });
activateLink();

