
const container = document.querySelector('.button__list');
const closeBtn = document.querySelector('.popup__collection');
const backdrop = document.querySelectorAll('.popup__collection > li');
console.log(backdrop);

container.addEventListener('click', onClick) ;
closeBtn.addEventListener('click', onCloseModal) ;


function onClick(event) {
    let k = event.target.id
    // let back = `popupBg${k}`
    let back = document.getElementById(`p${k}`)
    if (event.target.nodeName !== 'BUTTON') {
        return
    }
     event.preventDefault();
     back.classList.add('active');

    // console.log(event.target);
    // console.log(event.target.textContent);
    // console.log(event.target.nodeName);
    // console.log(back);
    // console.log(k);
}


function onCloseModal(event) {
    let currentActive = document.querySelector('.active')

    currentActive.classList.remove('active')
}

function OnEscKey(event) {
    const ESC = 'Escape'
    const isEscape = event.code === ESC

    if(isEscape) {
        onCloseModal()
    }
}


