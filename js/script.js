function toggleMenu() {
  const navbar = document.querySelector('.navbar');
  const menuIcon = document.querySelector('.menu-icon');
  
  // Toggle the menu visibility
  navbar.classList.toggle('show');
  
  // Toggle the close icon
  menuIcon.classList.toggle('close');
}

document.addEventListener("DOMContentLoaded", () => {
  const loadingMessage = document.getElementById("loading-message");

  // Simulate a loading time, then hide the message
  setTimeout(() => {
      loadingMessage.classList.add("hidden");
      setTimeout(() => {
          loadingMessage.style.display = "none";
      }, 500); // Match the transition duration in CSS
  }, 3000); // Adjust loading time as needed (3 seconds here)
});
