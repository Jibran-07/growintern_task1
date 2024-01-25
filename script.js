
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('nav a');
  
    // Smooth scroll effect
    navLinks.forEach(link => {
      link.addEventListener('click', smoothScroll);
    });
  
    function smoothScroll(event) {
      event.preventDefault();
      const targetId = event.target.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
      });
    }
  });
  
