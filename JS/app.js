

let currentIndex = 0;

function moveSlide(direction) {
  const track = document.getElementById("carousel-track");
  const images = track.querySelectorAll("img");
  const total = images.length-2; // si agrego mas imagenes debo colocar -1 sino pararece la ultima imagen
  currentIndex = (currentIndex + direction + total) % total;
  track.style.transform = `translateX(-${500 * currentIndex}px)`;
}
/*Espera a que el DOM cargue completamente*/
document.addEventListener("DOMContentLoaded", function () {
  const btnQuienes = document.querySelector('button[data-page="quienes"]');
  if (btnQuienes) {
    const seccionNosotros = document.getElementById("nosotros");
    btnQuienes.addEventListener("click", function () {
      seccionNosotros.scrollIntoView({ behavior: "smooth" });
    });
  }
  const btnProductos = document.querySelector('button[data-page="productos"]');
  btnProductos.addEventListener("click", function () {
    const seccionProductos = document.getElementById("productos");
    seccionProductos.scrollIntoView({ behavior: "smooth" });
  });
  const botones = document.querySelectorAll(".ver-detalles");
  botones.forEach(boton => {
    boton.addEventListener("click", function () {
      const detalles = this.nextElementSibling;
      detalles.style.display = detalles.style.display === "none" ? "block" : "none";
    });
  });
});
