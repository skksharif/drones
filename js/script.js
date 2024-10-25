function toggleMenu() {
    const navbar = document.querySelector('nav');
    navbar.classList.toggle('show');
    const navItems = document.querySelectorAll('nav a');

    navItems.forEach(item => {
        item.classList.toggle('show-navitems');
    });
    const menuIcon = document.querySelector('.menu-icon');
    menuIcon.classList.toggle('close');
}

