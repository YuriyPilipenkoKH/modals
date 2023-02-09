
const closeBtn = document.getElementById("close")

const container = document.querySelector('.modal-two');
container.addEventListener('click', onClick)

function onClick(event) {
    let k = event.target.id
    // let back = `popupBg${k}`
    let back = document.getElementById(`p${k}`)
    if (event.target.nodeName !== 'BUTTON') {
        return
    }

     event.preventDefault();
     back.classList.add('active');
   

    console.log(event.target);
    // console.log(event.target.textContent);
    // console.log(event.target.nodeName);
    console.log(back);

}



// openPopupButtons.forEach((button) => {
//     button.addEventListener('click', (e) => {
//         e.preventDefault();
//         popupBg.classList.add('active');
//         popup.classList.add('active');
//     })
// });

// closePopupButtons.forEach((button) => {
//     button.addEventListener('click', (e) => {
//         e.preventDefault();
//         popupBg.classList.remove('active');
//         popup.classList.remove('active');
//     })
// });


//     document.addEventListener('click', (e) => {
//         if(e.target === popupBg) {
//             popupBg.classList.remove('active');
//             popup.classList.remove('active');
//         }
    
//     })

    // function onEscPress(e) {
    //     if (e.code === 'Escape') {
    //         popupBg.classList.remove('active');
    //         popup.classList.remove('active');
    //     }
    // }    