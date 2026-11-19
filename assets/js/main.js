document.addEventListener('DOMContentLoaded', function () {

    const toggle = document.querySelector('.nav-menu-toggle');
    const menu = document.querySelector('.menu');

    if (toggle && menu) {
        toggle.addEventListener('click', function () {
            const abierto = menu.classList.toggle('menu-abierto');
            toggle.setAttribute('aria-expanded', abierto ? 'true' : 'false');
            toggle.setAttribute('aria-label', abierto ? 'Cerrar menú' : 'Abrir menú');
        });

        menu.querySelectorAll('a').forEach(function (enlace) {
            enlace.addEventListener('click', function () {
                if (window.innerWidth <= 992) {
                    menu.classList.remove('menu-abierto');
                    toggle.setAttribute('aria-expanded', 'false');
                    toggle.setAttribute('aria-label', 'Abrir menú');
                }
            });
        });

        window.addEventListener('resize', function () {
            if (window.innerWidth > 992) {
                menu.classList.remove('menu-abierto');
                toggle.setAttribute('aria-expanded', 'false');
                toggle.setAttribute('aria-label', 'Abrir menú');
            }
        });
    }

    const scrollUp = document.querySelector('.scroll-up');
    const UMBRAL = 300;

    if (scrollUp) {
        scrollUp.classList.remove('visible');

        function actualizarBoton() {
            if (window.scrollY > UMBRAL) {
                scrollUp.classList.add('visible');
            } else {
                scrollUp.classList.remove('visible');
            }
        }

        window.addEventListener('scroll', actualizarBoton);
        actualizarBoton();

        scrollUp.addEventListener('click', function (e) {
            e.preventDefault();
            window.scrollTo({ 
                top: 0, 
                behavior: 'smooth' 
            });
        });
    }

});
