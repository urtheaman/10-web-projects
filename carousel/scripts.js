const image = document.getElementById("image");
const carousel = document.getElementsByTagName("img");

let i = 0;
function displayInImage() {
  i++;
  if (i > carousel.length-1) {
    i = 0;
  }
  image.style.transform = `translateX(-${i * 30}rem)`;
  image.style.transition = 'transform 0.8s ease-in-out';
}

setInterval(displayInImage, 2000);
