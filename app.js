let popup = document.getElementById('popup');
let container = document.querySelector('.container');

function openPopup() {
    popup.classList.add('open-popup');
    container.classList.add('blur'); 
}

function closePopup() {
    popup.classList.remove('open-popup');
    container.classList.remove('blur');
}
