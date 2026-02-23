/* MENU MOBILE */
const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

btn.addEventListener('click', () => {
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
});

/* HEADER SUMIR / APARECER */
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll && currentScroll > 80) {
        header.classList.add('hide');
    } else {
        header.classList.remove('hide');
    }

    lastScroll = currentScroll;
});

/* ANIMAÇÃO AO ROLAR */
const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
    const windowHeight = window.innerHeight;

    reveals.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.classList.add('active');
        }
    });
}

/* ANO AUTOMÁTICO NO FOOTER */
document.getElementById('year').textContent = new Date().getFullYear();

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);