const body = document.body;
const link = document.querySelectorAll("a");
const modal = document.querySelector(".modal");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const headerMenu = document.querySelector(".header__menu");
const bookmarkBtn = document.getElementById("bookmark-btn");
const bookmarkImg = document.getElementById("bookmark-img");
const bookmarkText = document.getElementById("bookmark-text");
const openModalBtn = document.getElementById("open-modal");
const closeModalBtn = document.getElementById("close-modal");
const btnHamburger = document.querySelector("#btnHamburger");
const successModal = document.querySelector(".success-modal");
const serviceForms = document.querySelectorAll(".service__form");
const serviceCards = document.querySelectorAll(".service__card");
const serviceRadios = document.querySelectorAll(".service__radio");
const closeSuccessModalBtn = document.querySelector(".close-success-modal");
const modalFadeElems = [overlay, modal];
const headerFadeElems = [overlay, headerMenu];
const successFadeElems = [overlay, successModal];

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

bookmarkBtn.addEventListener("click", (e) => {
    if (bookmarkBtn.classList.contains('bookmarked')) {
        bookmarkBtn.classList.remove('bookmarked');
        bookmarkImg.src = '../images/icon-bookmark.svg';
        bookmarkText.innerText = 'Bookmark';
    } else {
        bookmarkBtn.classList.add('bookmarked');
        bookmarkImg.src = '../images/icon-bookmarked.svg';
        bookmarkText.innerText = 'Bookmarked';
    }
});

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

serviceRadios.forEach(radio => {
    radio.addEventListener("click", (e) => {
        const serviceCard = e.target.parentElement.parentElement.parentElement;

        serviceCards.forEach(card => {
            card.classList.remove('selected');
        });

        serviceCard.classList.add('selected');
    });
});

const openSuccessModal = () => {
    modal.classList.add('fade-out');
    successModal.classList.remove('fade-out');
    successModal.classList.add('fade-in');
}

const closeSuccessModal = () => {
    successFadeElems.forEach(element => {
        element.classList.add('fade-out');
        element.classList.remove('fade-in');
    });
}

serviceForms.forEach(form => {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        openSuccessModal();
    });
});

closeSuccessModalBtn.addEventListener("click", () => {
    closeSuccessModal();
});