document.addEventListener('DOMContentLoaded', () => {
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

    // Add scroll event listener for header
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        header.classList.toggle('scrolled', window.scrollY > 50);
    });
});