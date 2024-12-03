// Add scroll event to change background color of the navbar
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  
  // Check scroll position to toggle 'scrolled' class
  if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
  } else {
      navbar.classList.remove('scrolled');
  }
});
