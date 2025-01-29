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

const counters = document.querySelectorAll('.counter');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = +counter.getAttribute('data-target');
        const increment = target / 200;
        let count = 0;

        const updateCounter = () => {
          if (count < target) {
            count += increment;
            counter.textContent = Math.ceil(count) + '+';
            setTimeout(updateCounter, 10);
          } else {
            counter.textContent = target + '+';
          }
        };

        updateCounter();
      }
    });
  },
  { threshold: 0.2 }
);

// Attach observer to each counter
counters.forEach((counter) => observer.observe(counter));
