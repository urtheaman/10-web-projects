const bgChanger = document.getElementById('bg-changer-btn');
const body = document.getElementById('body');

bgChanger.addEventListener('click', () => {
    autoBgChanger();
    console.log(hsl);
});

function autoBgChanger() {
    let value1 = Math.floor(Math.random() * 361);
    let value2 = Math.floor(Math.random() * 101);
    let value3 = Math.floor(Math.random() * 101);
    const hsl = body.style.background = `hsl(${value1}, ${value2}%, ${value3}%)`;
}

