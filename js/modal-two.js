let popupBg = document.querySelector('.popup__bg-1');
let popup = document.querySelector('.popup-1');
let openPopupButtons = document.querySelectorAll('.open-popup-1');
let closePopupButtons = document.querySelector('.close-popup-1');

openPopupButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg.classList.add('active');
        popup.classList.add('active');
    })
});

closePopupButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg.classList.remove('active');
        popup.classList.remove('active');
    })
});


    document.addEventListener('click', (e) => {
        if(e.target === popupBg) {
            popupBg.classList.remove('active');
            popup.classList.remove('active');
        }
    
    })

    // function onEscPress(e) {
    //     if (e.code === 'Escape') {
    //         popupBg.classList.remove('active');
    //         popup.classList.remove('active');
    //     }
    // }    