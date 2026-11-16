// Mobile menu: the hamburger button shows/hides the nav links on small screens
function onPageLoad () {
    const button = document.querySelector('#nav-button')
    const nav = document.querySelector('.main-nav ul')
    const icon = button.querySelector('i')

    button.addEventListener('click', function () {
        if (nav.classList.contains('open')) {
            nav.classList.remove('open')
            icon.classList.remove('fa-xmark')
            icon.classList.add('fa-bars')
        }
        else {
            nav.classList.add('open')
            icon.classList.remove('fa-bars')
            icon.classList.add('fa-xmark')
        }
    })
}

window.addEventListener('load', onPageLoad)
