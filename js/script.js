document.addEventListener('DOMContentLoaded', () => {
  // Function to check if element is in viewport
  const isInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
  };

  // Elements to animate
  const aboutText = document.querySelector('.about-text');
  const aboutImage = document.querySelector('.about-image');

  // Animation function
  const animate = () => {
      if (isInViewport(aboutText)) {
          aboutText.style.opacity = '1';
          aboutText.style.transform = 'translateX(0)';
      }
      if (isInViewport(aboutImage)) {
          aboutImage.style.opacity = '1';
          aboutImage.style.transform = 'translateX(0)';
      }
  };

  // Initial styles
  aboutText.style.transform = 'translateX(-100px)';
  aboutText.style.transition = 'all 1s ease-out';
  
  aboutImage.style.transform = 'translateX(100px)';
  aboutImage.style.transition = 'all 1s ease-out';

  // Event listeners
  window.addEventListener('scroll', animate);
  window.addEventListener('load', animate);

  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navMenu = document.querySelector('.nav-menu');

  mobileMenuBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
      if (!e.target.closest('.header')) {
          navMenu.classList.remove('active');
      }
  });

  // Close menu when clicking a link
  document.querySelectorAll('.nav-menu a').forEach(link => {
      link.addEventListener('click', () => {
          navMenu.classList.remove('active');
      });
  });
});
