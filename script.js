// Smooth scroll for nav links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Simple hero animation effect
window.addEventListener('scroll', () => {
  const hero = document.getElementById('hero');
  hero.style.opacity = 1 - window.scrollY / 600;
});
