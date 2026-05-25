// Fade-in on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Hamburger menu
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
hamburger.addEventListener('click', () => mobileMenu.classList.toggle('open'));

// Close mobile menu on link click
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  navbar.style.borderBottomColor = window.scrollY > 40
    ? 'rgba(124,58,237,0.2)'
    : 'rgba(255,255,255,0.06)';
});
