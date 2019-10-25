document.addEventListener('DOMContentLoaded', () => {

// Menu
    const menuBtn = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    if (menuBtn && menu) {
        menuBtn.addEventListener('click', () => {
            document.body.classList.toggle('menu-opened');
        });
    }
});
