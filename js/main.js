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
  