/* MENU MOBILE */
const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

btn.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// FECHAR MENU AO CLICAR EM UM LINK (MOBILE)
document.querySelectorAll('#menu a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
    });
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

// SCROLL SUAVE SEM # NA URL
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            e.preventDefault(); // remove o # da URL

            const header = document.querySelector('.header');
            const headerHeight = header ? header.offsetHeight : 0;

            const elementPosition = targetSection.getBoundingClientRect().top;
            const offsetPosition =
                elementPosition + window.pageYOffset - headerHeight + 10;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

/* ANO AUTOMÁTICO NO FOOTER */
document.getElementById('year').textContent = new Date().getFullYear();

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);