export default defineNuxtPlugin(() => {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const delay = el.dataset.srDelay || '0'; // fallback to 0 if not set
          el.style.setProperty('--sr-delay', `${delay}ms`);
          el.classList.add('scroll-revealed');
          obs.unobserve(el);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  const initReveal = () => {
    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach((el) => observer.observe(el));
  };

  if (
    document.readyState === 'complete' ||
    document.readyState === 'interactive'
  ) {
    initReveal();
  } else {
    window.addEventListener('DOMContentLoaded', initReveal);
  }

  return {
    provide: {
      scrollReveal: initReveal,
    },
  };
});
