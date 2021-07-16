window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0)
})

function showMenu() {
    const nav = document.querySelector('.navigation')
    const menuIcon = document.querySelector('.menu-icon')

    nav.classList.toggle('active')
    menuIcon.classList.toggle('active')
}

