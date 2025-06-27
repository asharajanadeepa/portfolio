document.addEventListener('DOMContentLoaded', () => {
    // Typed.js for text animation
    const typed = new Typed('.text', {
        strings: ['Full Stack Developer', 'UI/UX Designer', 'Database Manager'],
        typeSpeed: 80,
        backSpeed: 40,
        backDelay: 1500,
        loop: true,
        showCursor: true,
        cursorChar: '|',
        autoInsertCss: true
    });

    // Hamburger menu toggle for mobile
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar');
    hamburger.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });

    // Close navbar when a link is clicked (improves mobile UX)
    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
        });
    });

    // Scroll event for header
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        header.classList.toggle('scrolled', window.scrollY > 50);
    });
});