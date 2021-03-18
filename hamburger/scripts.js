const hamMenu = document.getElementById("hamburger");
const nav = document.getElementById('nav-container');

hamMenu.addEventListener('click', () => {
    const i = hamMenu.querySelector('i');
    nav.classList.toggle('active');
    if (i.className == "fas fa-bars") {
        i.className = "fas fa-times";
    }else {
        i.className = "fas fa-bars";
    }
});