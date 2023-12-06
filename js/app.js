const menu = document.querySelector('.nav__top__contenedor__menuRight__menu');
const btn = document.querySelector('.nav__top__contenedor__menuCenter');

btn.addEventListener('click', function(){
    menu.classList.toggle('active');
})