const body = document.body;
const link = document.querySelectorAll("a");
const modal = document.querySelector(".modal");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const headerMenu = document.querySelector(".header__menu");
const openModalBtn = document.getElementById("open-modal");
const closeModalBtn = document.getElementById("close-modal");
const btnHamburger = document.querySelector("#btnHamburger");
const headerFadeElems = [overlay, headerMenu];
const modalFadeElems = [overlay, modal];

btnHamburger.addEventListener('click', function (e) {
    e.preventDefault();
    if (header.classList.contains('open')) { // Close Hamburger Menu
        header.classList.remove('open');
        body.classList.remove('noscroll');
        headerFadeElems.forEach(element => {
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
    }
    else { // Open Hamburger Menu
        header.classList.add('open');
        body.classList.add('noscroll');
        headerFadeElems.forEach(element => {
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });
    }
});

link.forEach(a => a.addEventListener("click", (e) => {
    e.preventDefault();
}));

openModalBtn.addEventListener("click", () => {
    modalFadeElems.forEach(element => {
        element.classList.remove('fade-out');
        element.classList.add('fade-in');
    });
});

closeModalBtn.addEventListener("click", () => {
    modalFadeElems.forEach(element => {
        element.classList.remove('fade-in');
        element.classList.add('fade-out');
    });
});