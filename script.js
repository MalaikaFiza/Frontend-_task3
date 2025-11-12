// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Mobile menu toggle
const toggle = document.getElementById('menu-toggle');
const nav = document.querySelector('nav');
toggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});
