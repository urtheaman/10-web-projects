const darkMode = document.getElementById('dark-mode-switch');

darkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});