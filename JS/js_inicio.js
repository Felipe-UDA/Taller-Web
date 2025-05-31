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

// Detectar cuando el elemento entra en el área visible
function activarAnimaciones() {
    const elementos = document.querySelectorAll('.scroll-fade');
    
    elementos.forEach((elemento) => {
        const posicionElemento = elemento.getBoundingClientRect();
        // Si el elemento está visible en la ventana del navegador
        if (posicionElemento.top < window.innerHeight && posicionElemento.bottom >= 0) {
            elemento.classList.add('visible');
        } else {
            elemento.classList.remove('visible');
        }
    });
}

// Llamar a la función cuando se haga scroll
window.addEventListener('scroll', activarAnimaciones);

// También llamar a la función al cargar la página para verificar los elementos visibles
document.addEventListener('DOMContentLoaded', activarAnimaciones);

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
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const mensajeBienvenida = document.getElementById('MensajeBienvenida');
  
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
  
      const usuarioIngresado = document.getElementById('usuario').value.trim();
      const contrasenaIngresada = document.getElementById('contrasena').value.trim();
  
      const usuarioGuardado = localStorage.getItem('usuario');
      const passwordGuardado = localStorage.getItem('password');

      // Agregar logs de depuración
      console.log("Usuario ingresado: ", usuarioIngresado);
      console.log("Contraseña ingresada: ", contrasenaIngresada);
      console.log("Usuario guardado: ", usuarioGuardado);
      console.log("Contraseña guardada: ", passwordGuardado);
  
      if (usuarioIngresado === usuarioGuardado && contrasenaIngresada === passwordGuardado) {
        mensajeBienvenida.textContent = `Bienvenido, ${usuarioGuardado}!`;
  
        const modal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
        modal.hide();
      } else {
        alert("Usuario o contraseña incorrectos.");
      }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('toggleDarkMode');

    // Verifica si el usuario ya tiene una preferencia guardada
    if (localStorage.getItem('modoOscuro') === 'true') {
        document.body.classList.add('dark-mode');
        toggleBtn.textContent = '☀️ Modo Claro';
    }

    toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const modoOscuroActivo = document.body.classList.contains('dark-mode');
        localStorage.setItem('modoOscuro', modoOscuroActivo);

        toggleBtn.textContent = modoOscuroActivo ? '☀️ Modo Claro' : '🌙 Modo Oscuro';
    });
});
// API
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("juegos-container");
  container.innerHTML = ""; // Limpia las tarjetas estáticas

  fetch("https://www.cheapshark.com/api/1.0/deals?storeID=1&pageSize=6")
    .then(res => res.json())
    .then(data => {
      data.forEach(juego => {
        const juegoHTML = `
          <div>
            <div class="juego-card scroll-fade">
              <img src="${juego.thumb}" class="card-img-top" alt="${juego.title}">
              <div class="card-body">
                <h5 class="card-title text-dark">${juego.title}</h5>
                <p class="card-text text-success">Precio: $${juego.salePrice}</p>
              </div>
            </div>
          </div>
        `;
        container.innerHTML += juegoHTML;
      });
    })
    .catch(error => {
      console.error("Error al obtener los juegos:", error);
      container.innerHTML = "<p>Error al cargar juegos desde la API.</p>";
    });
});

// API II
document.addEventListener("DOMContentLoaded", function () {
    const contenedorNoticias = document.getElementById("noticias-container");

    fetch("https://newsapi.org/v2/everything?q=PlayStation&language=es&sortBy=publishedAt&pageSize=6&apiKey=4fdf61499cc74efb81d9a21c3a9cb977")
        .then(response => response.json())
        .then(data => {
            if (data.articles && data.articles.length > 0) {
                data.articles.forEach(noticia => {
                    const card = document.createElement("div");
                    card.classList.add("col-md-4", "mb-4");
                    card.innerHTML = `
                        <div class="card h-100">
                            <img src="${noticia.urlToImage || 'https://via.placeholder.com/300'}" class="card-img-top" alt="Noticia">
                            <div class="card-body d-flex flex-column">
                                <h5 class="card-title">${noticia.title}</h5>
                                <p class="card-text">${noticia.description || "Sin descripción disponible"}</p>
                                <a href="${noticia.url}" class="mt-auto btn btn-primary" target="_blank">Leer más</a>
                            </div>
                        </div>
                    `;
                    contenedorNoticias.appendChild(card);
                });
            } else {
                contenedorNoticias.innerHTML = "<p>No se encontraron noticias recientes.</p>";
            }
        })
        .catch(error => {
            console.error("Error al obtener noticias:", error);
            contenedorNoticias.innerHTML = "<p>Ocurrió un error al cargar las noticias.</p>";
        });
});