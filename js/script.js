function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    const menuIcon = document.querySelector('.menu-icon');
    
    // Toggle the `show` class on the navbar
    navbar.classList.toggle('show');
    
    // Toggle the `close` class on the menu icon for the animation
    menuIcon.classList.toggle('close');
  }
  

document.querySelectorAll('.courses1-read-more').forEach(button => {
  button.addEventListener('click', () => {
      const extraContent = button.previousElementSibling;
      const isHidden = extraContent.style.display === 'none' || !extraContent.style.display;
      
      if (isHidden) {
          extraContent.style.display = 'block';
          button.textContent = 'Read Less';
      } else {
          extraContent.style.display = 'none';
          button.textContent = 'Read More';
      }
  });
});

document.querySelectorAll('.read-more-button').forEach(button => {
  button.addEventListener('click', () => {
      const extraContent = button.previousElementSibling;
      const isHidden = extraContent.style.display === 'none' || !extraContent.style.display;
      
      if (isHidden) {
          extraContent.style.display = 'block';
          button.textContent = 'Read Less';
      } else {
          extraContent.style.display = 'none';
          button.textContent = 'Read More';
      }
  });
});

