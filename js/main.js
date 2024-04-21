let fechaHora = document.getElementById("fechaHora")

function actualizarHora(){
    let ahora = new Date();
    let ejemplo = { year:"numeric",month:"long", day:"numeric", hour:"numeric", minute:"numeric",second:"numeric",hour12:false}
    fechaHora.textContent = ahora.toLocaleDateString("es-ES",ejemplo)
}
actualizarHora();

setInterval(actualizarHora,1000);


function encender() {
    let pantalla = document.querySelector(".pantalla");
    pantalla.style.display = "block"; 
  }
  
  function apagar() {
    let pantalla = document.querySelector(".pantalla");
    pantalla.style.display = "none"; 
  }
  
  
  function inicio(){
    let pantalla = document.querySelector(".pantalla");
    pantalla.style.backgroundImage =  "url('./imagenes/INICIO.webp')";
  }
  function tve(){
    let pantalla = document.querySelector(".pantalla");
    pantalla.style.backgroundImage = "url('./imagenes/tve.jpeg')"
  }
  function dos(){
    let pantalla = document.querySelector(".pantalla");
    pantalla.style.backgroundImage = "url('./imagenes/2.jpg')"
  }
  function tres(){
    let pantalla = document.querySelector(".pantalla");
    pantalla.style.backgroundImage = "url('./imagenes/3.jpg')"
    
  }
  function cuatro(){
    let pantalla = document.querySelector(".pantalla");
    pantalla.style.backgroundImage = "url('./imagenes/4.jpeg')"
  }

  function cinco(){
    let pantalla = document.querySelector(".pantalla");
    pantalla.style.backgroundImage = "url('./imagenes/5.jpg')"
  }
