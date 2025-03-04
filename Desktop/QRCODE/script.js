const desktopBtn = document.getElementById('desktopBtn');
const mobileBtn = document.getElementById('mobileBtn');
const container = document.querySelector('.outter-container');


desktopBtn.addEventListener('click', () => {
     
    //add class
    desktopBtn.classList.add('button-active');
    container.classList.add('desktop')
    // remove class
    mobileBtn.classList.remove('button-active');
})

mobileBtn.addEventListener('click', () => {

    //remove class
    desktopBtn.classList.remove('button-active');
    container.classList.remove('desktop')
    //add class
    mobileBtn.classList.add('button-active');
})