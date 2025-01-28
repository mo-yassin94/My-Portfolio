import AOS from 'aos';

// Initialize AOS with enhanced settings
AOS.init({
  duration: 1000,
  once: true,
  offset: 100,
  easing: 'ease-out-cubic',
  delay: 50
});