//MODO OSCURO
document.addEventListener('DOMContentLoaded', () => { //aqui se espera que este cargado
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
//Parte del texto en las imagenes
document.querySelectorAll('.clickable-img').forEach((img) => {
    img.addEventListener('click', () => {
      const mensaje = img.nextElementSibling;
      mensaje.classList.toggle('d-none');
    });
  });
//Boton para subir
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