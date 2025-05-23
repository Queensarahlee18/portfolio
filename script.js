// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// Simple contact form handler (no backend)
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for reaching out! I will get back to you soon.');
    contactForm.reset();
  });
}

// Dynamic date and time in footer
function updateDateTime() {
  const dtElem = document.getElementById('datetime');
  const yearElem = document.getElementById('year');
  const now = new Date();
  if (dtElem) {
    dtElem.textContent = now.toLocaleString();
  }
  if (yearElem) {
    yearElem.textContent = now.getFullYear();
  }
}
setInterval(updateDateTime, 1000);
updateDateTime();

// Active nav link on scroll
const navLinksArr = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('main section');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100; // adjust offset for header height
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  navLinksArr.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});
