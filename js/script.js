function toggleMenu() {
  const navbar = document.querySelector('.navbar');
  const menuIcon = document.querySelector('.menu-icon');
  
  // Toggle the menu visibility
  navbar.classList.toggle('show');
  
  // Toggle the close icon
  menuIcon.classList.toggle('close');
}
