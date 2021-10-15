const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const fadeElems = document.querySelectorAll('.has-fade');
const link = document.querySelectorAll("a");

btnHamburger.addEventListener('click', function (e) {
    e.preventDefault();
    if (header.classList.contains('open')) { // Close Hamburger Menu
        header.classList.remove('open');
        fadeElems.forEach(function (element) {
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
    }
    else { // Open Hamburger Menu
        header.classList.add('open');
        fadeElems.forEach(function (element) {
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });
    }
});

link.forEach(a => a.addEventListener("click", (e) => {
    e.preventDefault();
}));