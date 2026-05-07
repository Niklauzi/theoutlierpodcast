// Intersection observer for reveal animations
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), 60);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  reveals.forEach(el => observer.observe(el));

  // Stagger sibling reveals
  document.querySelectorAll('.about-grid, .topics-grid, .episodes-list, .why-grid, .follow-buttons').forEach(container => {
    const children = container.querySelectorAll('.reveal');
    children.forEach((child, i) => {
      child.style.transitionDelay = `${i * 60}ms`;
    });
  });

  // Email form
  document.querySelector('.email-form .btn-primary').addEventListener('click', (e) => {
    e.preventDefault();
    const input = document.querySelector('.email-input');
    if (input.value && input.value.includes('@')) {
      input.value = '';
      input.placeholder = 'You\'re in. Welcome to the outliers.';
      e.target.textContent = 'Done ✓';
      e.target.style.background = '#00cc6a';
    }
  });