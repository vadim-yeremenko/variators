//Burger menu
// $(function() {
//     $('.menu__icon').on('click', function() {
//         $(this).closest('.menu').toggleClass('menu_state_open');
//     });
// });

const menuBtn = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

if (menuBtn && menu) {
    menuBtn.addEventListener('click', (e) => {
        menu.classList.toggle('-is-open');
        menuBtn.classList.toggle('-is-open');
        document.body.classList.toggle('menu-opened');
    });
}
