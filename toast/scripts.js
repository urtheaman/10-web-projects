const toastBtn = document.getElementById('toastBtn');
const toastContainer = document.getElementById('toast-container');
const toastMessage = document.getElementsByClassName('toast');

toastBtn.addEventListener('click', () => {
    createToastNots();
});

function createToastNots() {
    const toastNots = document.createElement('div');

    toastNots.innerHTML = "<p>Toast Message</p>";
    toastNots.classList.add('toast');

    toastContainer.appendChild(toastNots);
    setTimeout(() => {
        toastNots.remove();
    }, 3000);
}

// toastMessage.forEach(element => {
//     element.addEventListener('click', () => {
//         element.remove();
//     });
// });