let indiceActual = 0;
const slides = document.querySelectorAll('.slide');

function mostrarSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
}

function cambiarSlide(direccion) {
  indiceActual += direccion;

  if (indiceActual >= slides.length) indiceActual = 0;
  if (indiceActual < 0) indiceActual = slides.length - 1;

  mostrarSlide(indiceActual);
}

// Mostrar el primer slide al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  mostrarSlide(indiceActual);
});
