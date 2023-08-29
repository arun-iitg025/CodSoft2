const header = document.querySelector('header');

window.addEventListener("scroll",function() {
    header.classList.toggle("sticky", this.window);
});

let menu  = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
};