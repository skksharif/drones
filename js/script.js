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
