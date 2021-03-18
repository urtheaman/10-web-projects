const popupBtn = document.getElementById("popup-btn");
const popupContainer = document.getElementById('popup-container');
const close = document.getElementById('no');

popupBtn.addEventListener('click', () => {
    popupContainer.style.visibility = "visible";
});

close.addEventListener('click', () => {
    popupContainer.style.visibility = "hidden";
});