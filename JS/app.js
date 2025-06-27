

let currentIndex = 0;

function moveSlide(direction) {
  const track = document.getElementById("carousel-track");
  const images = track.querySelectorAll("img");
  const total = images.length-2; // si agrego mas imagenes debo colocar -1 sino pararece la ultima imagen
  currentIndex = (currentIndex + direction + total) % total;
  track.style.transform = `translateX(-${500 * currentIndex}px)`;
}

function abrirModal() {
  document.getElementById("modalLogin").style.display = "block";
}
function cerrarModal() {
  document.getElementById("modalLogin").style.display = "none";
}
