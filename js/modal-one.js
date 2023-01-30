const refs = {
    openModalBtn: document.querySelector('[data-action="open-modal"]') ,
    closeModalBtn: document.querySelector('.button-close') ,
    closeSecondModalBtn: document.querySelector('.button-close-2') ,

    openSecondModalBtn: document.querySelector('[data-action="open-modal-2"]') ,
    secondBackdrop: document.querySelector('.backdrop-2'),

    backdrop: document.querySelector('.js-backdrop'),
};

 refs.openModalBtn.addEventListener('click',onOpenModal);
 refs.closeModalBtn.addEventListener('click',onCloseModal);
 refs.closeSecondModalBtn.addEventListener('click',onCloseModal);
 refs.backdrop.addEventListener('click',onBackdropClick);

//  mod2
 refs.openSecondModalBtn.addEventListener('click',onOpenModal2);

function onOpenModal() {
    window.addEventListener('keydown', onEscPress)
    document.body.classList.add('show-modal');
}  

function onOpenModal2() {
    window.addEventListener('keydown', onEscPress)
    refs.secondBackdrop.classList.add('active')
}  

function onCloseModal() {
    window.removeEventListener('keydown',onEscPress)
    document.body.classList.remove('show-modal');
    refs.secondBackdrop.classList.remove('active')
}  

function onBackdropClick(event) {
    if (event.currentTarget === event.target) {
        onCloseModal();
    }
}

function onEscPress(event) {
    if (event.code === 'Escape') {
        onCloseModal()
    }
}

