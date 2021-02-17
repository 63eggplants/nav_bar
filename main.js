const ha = document.querySelector('.ha');
const menu = document.querySelector('.nav__menu');
const icons = document.querySelector('.nav__icons')

ha.addEventListener('click', ()=> {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});
