const particleField = document.querySelector('.particle-field');

if (particleField) {
  const particleCount = 28;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('span');
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.animationDelay = `${Math.random() * 5}s`;
    particle.style.opacity = `${0.3 + Math.random() * 0.7}`;
    particleField.appendChild(particle);
  }
}

const navLinks = document.querySelectorAll('.nav-menu a, .unit-link, .btn-primary, .btn-secondary, .btn-scroll-top');

navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    const targetId = link.getAttribute('href');
    if (!targetId || !targetId.startsWith('#')) return;

    event.preventDefault();
    const target = document.querySelector(targetId);

    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll('.reveal').forEach((item) => observer.observe(item));

const osCards = document.querySelectorAll('.os-card');

osCards.forEach((card) => {
  const toggle = card.querySelector('.os-toggle');
  const body = card.querySelector('.os-body');

  if (!toggle || !body) return;

  body.style.maxHeight = '0';
  body.style.overflow = 'hidden';
  body.style.opacity = '0';
  body.style.transition = 'max-height 0.35s ease, opacity 0.35s ease, margin-top 0.35s ease';

  toggle.addEventListener('click', () => {
    const isOpen = toggle.dataset.open === 'true';

    if (isOpen) {
      body.style.maxHeight = '0';
      body.style.opacity = '0';
      body.style.marginTop = '0';
      toggle.dataset.open = 'false';
      toggle.textContent = 'Leer más';
    } else {
      body.style.maxHeight = '420px';
      body.style.opacity = '1';
      body.style.marginTop = '10px';
      toggle.dataset.open = 'true';
      toggle.textContent = 'Leer menos';
    }
  });
});
