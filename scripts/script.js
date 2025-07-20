// Responsive Navbar Toggle (Hamburger menu)
document.addEventListener('DOMContentLoaded', function() {
  const menuBtn = document.querySelector('.menu-btn');
  const navLinks = document.querySelector('.nav-links');

  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', function() {
      navLinks.classList.toggle('nav-active');
      menuBtn.classList.toggle('open');
    });
  }

  // Newsletter Form Basic Validation
  const newsletterForm = document.querySelector('.footer-newsletter form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      const emailInput = newsletterForm.querySelector('input[type="email"]');
      const email = emailInput.value.trim();
      // Very basic email check
      if (!/^[^@]+@[^@.]+\.[a-z]{2,}$/i.test(email)) {
        e.preventDefault();
        alert('Please enter a valid email address.');
        emailInput.focus();
      }
    });
  }
});

