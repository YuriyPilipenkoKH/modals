let popupBg = document.querySelector('.popup__bg-1');
let popup = document.querySelector('.popup-1');
let openPopupButtons = document.querySelector('.open-popup');
let closePopupButtons = document.querySelector('.close-popup');

openPopupButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg.classList.add('active');
        popup.classList.add('active');
    })
});

closePopupButtons.forEach((button) => {
    button.addEventListener('click', () => {
        // e.preventDefault();
        popupBg.classList.remove('active');
        popup.classList.remove('active');
    })
});