mobile = document.getElementById('menu');

function setMenu(e) {
    e.classList.toggle('on');
    menu = document.getElementsByClassName('mobileMenu');
    menu[0].classList.toggle('appear');
}

document.addEventListener('click', function(event) {
    if (mobile.classList.contains('on') && !mobile.contains(event.target)) {
        setMenu(mobile);
    }
});


