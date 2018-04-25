function toggleNavbarMenu(icon) {
    var navbarMenu = document.getElementsByClassName('navbar-menu')[0];
    var tintBackground = document.getElementById('tint-background');
    navbarMenu.classList.toggle('navbar-menu-closed');
    icon.classList.toggle('icon-rotated-90deg');
    icon.innerHTML = icon.innerHTML == 'menu' ? 'close' : 'menu';
}