const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

sounds.forEach((element) => {
  const button = document.createElement("button");
  button.innerText = element;

  button.addEventListener("click", () => {
    songReset();
    document.getElementById(element).play();
  });

  document.body.appendChild(button);
});

function songReset() {
  sounds.forEach((e) => {
    const song = document.getElementById(e);

    song.pause();
    song.currentTime = 0;
  });
}
