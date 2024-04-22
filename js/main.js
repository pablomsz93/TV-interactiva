let fechaHora = document.getElementById("fechaHora");

function actualizarHora() {
  let ahora = new Date();
  let ejemplo = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  };
  fechaHora.textContent = ahora.toLocaleDateString("es-ES", ejemplo);
}
actualizarHora();

setInterval(actualizarHora, 1000);

function encender() {
  let pantalla = document.querySelector(".pantalla");
  pantalla.style.display = "block";
}

function apagar() {
  let pantalla = document.querySelector(".pantalla");
  pantalla.style.display = "none";
}

function inicio() {
  let pantalla = document.querySelector(".pantalla");
  pantalla.style.backgroundImage = "url('./imagenes/INICIO.webp')";
}
function tve() {
  let pantalla = document.querySelector(".pantalla");
  pantalla.style.backgroundImage = "url('./imagenes/tve.jpeg')";
}
function dos() {
  let pantalla = document.querySelector(".pantalla");
  pantalla.style.backgroundImage = "url('./imagenes/2.jpg')";
}
function tres() {
  let pantalla = document.querySelector(".pantalla");
  pantalla.style.backgroundImage = "url('./imagenes/3.jpg')";
}
function cuatro() {
  let pantalla = document.querySelector(".pantalla");
  pantalla.style.backgroundImage = "url('./imagenes/4.jpeg')";
}

function cinco() {
  let pantalla = document.querySelector(".pantalla");
  pantalla.style.backgroundImage = "url('./imagenes/5.jpg')";
}
function netflix() {
  let pantalla = document.querySelector(".pantalla");
  pantalla.style.backgroundImage = "url('./imagenes/netflix.jpg')";
}
function amazon() {
  let pantalla = document.querySelector(".pantalla");
  pantalla.style.backgroundImage = "url('./imagenes/prime.webp')";
}
function subirVolumenEmpieza() {
  let pantalla = document.getElementById("fechaHora");
  let volumenMensaje = document.createElement("div");
  volumenMensaje.classList.add("volumenMensaje");
  volumenMensaje.textContent = "Subiendo volumen...";
  pantalla.appendChild(volumenMensaje);
}

function subirVolumenPara() {
  let volumenMensaje = document.querySelector(".volumenMensaje");
  if (volumenMensaje) volumenMensaje.remove();
}

function bajarVolumenEmpieza() {
  let pantalla = document.getElementById("fechaHora");
  let volumenMensaje = document.createElement("div");
  volumenMensaje.classList.add("volumenMensaje");
  volumenMensaje.textContent = "Bajando volumen...";
  pantalla.appendChild(volumenMensaje);
}

function bajarVolumenPara() {
  let volumenMensaje = document.querySelector(".volumenMensaje");
  if (volumenMensaje) volumenMensaje.remove();
}
