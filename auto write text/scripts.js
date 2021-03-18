const text = document.getElementsByTagName('h1');
const content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, assumenda."

let i = 0;
function AutoWrite(e) {
    const character = e.slice(0,i);
    text[0].innerText = character;
    i++;

    if (i > e.length) {
        i = 0;
    }

    setTimeout(() => {
        AutoWrite(e);
    }, 100);
}

AutoWrite(content);

// setInterval(() => {
//     AutoWrite(content);
// },100);