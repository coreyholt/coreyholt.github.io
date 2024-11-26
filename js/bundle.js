var body = document.querySelector('body');
var menuTrigger = document.querySelector('#toggle-menu-main-mobile');
var menuContainer = document.querySelector('#menu-main-mobile');
var hamburgerIcon = document.querySelector('.hamburger');

if (menuTrigger !== null) {
  menuTrigger.addEventListener('click', function(e) {
    menuContainer.classList.toggle('open');
    hamburgerIcon.classList.toggle('is-active');
    body.classList.toggle('lock-scroll');
  });
}

// JavaScript to trigger animation on scroll
document.addEventListener('DOMContentLoaded', function() {
  var aboutSection = document.querySelector('.about-summary');

  function fadeInOnScroll() {
    if (!aboutSection) return;

    var aboutSectionTop = aboutSection.getBoundingClientRect().top;
    var screenHeight = window.innerHeight;

    // Check if the about section is within the viewport
    if (aboutSectionTop < screenHeight * 0.7) {
      aboutSection.classList.add('fade-in');
    } else {
      aboutSection.classList.remove('fade-in'); // Ensure it's removed when not in view
    }
  }

  // Initial check in case section is already in view on page load
  fadeInOnScroll();

  // Listen for scroll events
  window.addEventListener('scroll', fadeInOnScroll);
});

// Search
document.getElementById('package-search').addEventListener('input', function() {
  const searchValue = this.value.toLowerCase();
  const packageItems = document.querySelectorAll('.package-item');

  packageItems.forEach(function(item) {
    const keywords = item.getAttribute('data-keywords').toLowerCase();
    if (keywords.includes(searchValue)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
});

