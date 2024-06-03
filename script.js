document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('.navlist');
    const navLinks = document.querySelectorAll('.navlist a');

    navToggle.addEventListener('click', () => {
        navList.classList.toggle('active');
    });

    // Close menu when clicking outside of it
    document.addEventListener('click', (event) => {
        if (!navList.contains(event.target) && !navToggle.contains(event.target)) {
            navList.classList.remove('active');
        }
    });

    // Close menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('active');
        });
    });
});
