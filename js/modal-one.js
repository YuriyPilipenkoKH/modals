
const modals = {
     modalFirst : document.querySelector('.popup__bg-1'),
     modalSecod : document.querySelector('.popup__bg-2'),
     modalThird : document.querySelector('.popup__bg-3'),
     modalFourth: document.querySelector('.popup__bg-4'),
     modalFifth : document.querySelector('.popup__bg-5'),

     popupsArray: document.querySelectorAll('.popup__collection li'),
     openButtonsArray: document.querySelectorAll('#m-1, #m-2, #m-3, #m-4, #m-5'),
     closeButtonsArray: document.querySelectorAll('.close-popup'),

}

console.log(modals.popupsArray);
console.log(modals.openButtonsArray);
console.log(modals.closeButtonsArray);

// modals.modalThird.classList.add('active')
// console.log(modals.popupsArray[0])

modals.openButtonsArray.forEach((button) => {
    console.log(button.textContent);
    button.addEventListener('click', (e) => {
        let i = 3
        e.preventDefault();
       
        modals.popupsArray[i].classList.add('active')
    })
    })


const refs = {
    openModalBtn: document.querySelector('[data-action="open-modal"]') ,
    closeModalBtn: document.querySelector('.button-close') ,
    closeSecondModalBtn: document.querySelector('.button-close-2') ,
    openSecondModalBtn: document.querySelector('[data-action="open-modal-2"]') ,
    secondBackdrop: document.querySelector('.backdrop-2'),
    backdrop: document.querySelector('.js-backdrop'),

}

 refs.openModalBtn.addEventListener('click',onOpenModal);
 refs.closeModalBtn.addEventListener('click',onCloseModal);
 refs.closeSecondModalBtn.addEventListener('click',onCloseModal);
 refs.backdrop.addEventListener('click',onBackdropClick);





function onOpenModal(e) {
    e.preventDefault();
    window.addEventListener('keydown', onEscPress)
    document.body.classList.add('show-modal');
   
        popupBg.classList.add('active');
        popup.classList.add('active');

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

