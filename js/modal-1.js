const refs = {
    openModalBtn: document.querySelector('[data-action="open-modal"]') ,
    closeModalBtn: document.querySelector('[data-action="close-modal"]') ,

    openSecondModalBtn: document.querySelector('[data-action="open-modal-2"]') ,

    backdrop: document.querySelector('.js-backdrop'),
}

 refs.openModalBtn.addEventListener('click',onOpenModal);
 refs.closeModalBtn.addEventListener('click',onCloseModal);
 refs.backdrop.addEventListener('click',onBackdropClick)

function onOpenModal() {
    document.body.classList.add('show-modal');
}  

function onCloseModal() {
    document.body.classList.remove('show-modal');
}  

function onBackdropClick(event) {
    if (event.currentTarget === event.target) {
        onCloseModal();
    }
}

