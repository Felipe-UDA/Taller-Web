const miniaturas = document.querySelectorAll('.miniatura');
const imagenPrincipal = document.getElementById('imagen-principal');

miniaturas.forEach(mini => {
  mini.addEventListener('click', () => {
    imagenPrincipal.src = mini.src;
  });
});


document.getElementById("verMasBtn").onclick = function() {
  // Mostrar las siguientes 6 cartas
  document.getElementById("mas-juegos-container").style.display = "flex";
  
  // Cambiar el texto del botón
  this.textContent = "Ya no hay más juegos";
  this.disabled = true; // Desactivar el botón después de hacer clic
};