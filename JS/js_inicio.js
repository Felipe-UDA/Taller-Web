// CARRUSEL
let indiceActual = 0;
const slides = document.querySelectorAll('.slide');

// Mostrar el slide en el índice indicado
function mostrarSlide(index) {
  slides.forEach(slide => slide.classList.remove('active')); // Eliminar clase active de todos los slides
  slides[index].classList.add('active'); // Añadir clase active al slide actual
}

// Cambiar al siguiente o anterior slide
function cambiarSlide(direccion) {
  indiceActual += direccion;

  // Si el índice es mayor que la cantidad de slides, reiniciamos
  if (indiceActual >= slides.length) indiceActual = 0;
  // Si el índice es menor que 0, vamos al último slide
  if (indiceActual < 0) indiceActual = slides.length - 1;

  mostrarSlide(indiceActual);
}

// Mostrar el primer slide al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  mostrarSlide(indiceActual);
});

// PERIFERICOS
const miniaturas = document.querySelectorAll('.miniatura');
const imagenPrincipal = document.getElementById('imagen-principal');

// Cambiar la imagen principal cuando se hace clic en una miniatura
miniaturas.forEach(mini => {
  mini.addEventListener('click', () => {
    imagenPrincipal.src = mini.src; // Cambiar la fuente de la imagen principal
  });
});

// JUEGOS Y VER MÁS
const verMasBtn = document.getElementById("verMasBtn");
const masJuegosContainer = document.getElementById("mas-juegos-container");

verMasBtn.onclick = function () {
    if (masJuegosContainer.style.display === "none" || masJuegosContainer.style.display === "") {
        masJuegosContainer.style.display = "grid"; // Usa grid, no flex
        verMasBtn.textContent = "Ver menos";
    } else {
        masJuegosContainer.style.display = "none";
        verMasBtn.textContent = "Ver más";
    }
};

window.onscroll = function(){
    if(document.documentElement.scrollTop > 50){
        document.querySelector('.go-top-container')
        .classList.add('show');
    }else{
        document.querySelector('.go-top-container')
        .classList.remove('show');
    }
}

document.querySelector('.go-top-container')
.addEventListener('click', () =>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

//parte del modal
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const welcomeMessage = document.getElementById("welcomeMessage");

    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const username = document.getElementById("usuario").value.trim();
      const password = document.getElementById("contrasena").value;

      if (username && password) {
        // Mostrar mensaje en el navbar
        welcomeMessage.textContent = `Bienvenido, ${username}`;

        // Cerrar el modal (usando Bootstrap 5)
        const loginModal = bootstrap.Modal.getInstance(document.getElementById("loginModal"));
        loginModal.hide();
      } else {
        alert("Por favor, completa todos los campos.");
      }
    });
});

