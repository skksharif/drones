function toggleMenu() {
  const navbar = document.querySelector('.navbar');
  const menuIcon = document.querySelector('.menu-icon');
  navbar.classList.toggle('show');
  menuIcon.classList.toggle('close');
}

document.addEventListener("DOMContentLoaded", () => {
  const loadingMessage = document.getElementById("loading-message");

  setTimeout(() => {
      loadingMessage.classList.add("hidden");
      setTimeout(() => {
          loadingMessage.style.display = "none";
      }, 500); 
  }, 3000);
});

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

