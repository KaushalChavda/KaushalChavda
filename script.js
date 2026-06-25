window.addEventListener("load", function () {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });
});


const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.sub-menu');

navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
});