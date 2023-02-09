
const container = document.querySelector('.button__list');
const closeBtn = document.querySelector('.popup__collection');
// const backdrop = document.querySelectorAll('.popup__collection > li');
const closeArray = document.querySelectorAll('.close-popup')
console.log(closeArray);


container.addEventListener('click', onClick) ;
closeBtn.addEventListener('click', onCloseModal) ;


function onClick(event) {
    // window.addEventListener('keydown',OnEscKey)
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
    // window.removeEventListener('keydown',OnEscKey)
    let currentActive = document.querySelector('.active')
    if (event.target.nodeName !== 'BUTTON') {
        return
    }
    currentActive.classList.remove('active')
  
}

// function OnEscKey(event) {
//     const ESC = 'Escape'
//     const isEscape = event.code === ESC

//     if(isEscape) {
//         onCloseModal()
//     }
// }


