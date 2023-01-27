// fixar nav ao rolar para baixo

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scrolled', window.scrollY > 0);
})


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        599: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        1023: {
            slidesPerView: 3,
            spaceBetween: 60
        }
    }
});



window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scrolled', window.scrollY > 0);
});

// redimensionar página
window.addEventListener('resize', () => {
    // verificar largura da página
    if (document.body.clientWidth > 1350) {
        // esconder botão do menu
        document.querySelector('#nav_toggle-open').style.display = 'none';
        document.querySelector('#nav_toggle-close').style.display = 'none';
        // mostrar barra de navegação de forma normal
        document.querySelector('.nav_links').style.display = 'flex';
    }
});

const nav = document.querySelector('.nav_links');
const openNavBtn = document.querySelector('#nav_toggle-open');
const closeNavBtn = document.querySelector('#nav_toggle-close');

const openNav = () => {
    nav.style.display = 'flex';
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'block';
}

openNavBtn.addEventListener('click', openNav);

const closeNav = () => {
    nav.style.display = 'none';
    openNavBtn.style.display = 'inline-block';
    closeNavBtn.style.display = 'none';
}

closeNavBtn.addEventListener('click', closeNav);

// fechar nav menu ao clicar nos links do menu em determinado px
if (document.body.clientWidth < 744) {
    nav.querySelectorAll('li a').forEach(navLink => {
        navLink.addEventListener('click', closeNav)
    });
}








