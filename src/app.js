/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let sujeto = ["el perro", "mi abuela", "el cartero", "mi pájaro"];
  let accion = ["se comió", "orinó en", "aplastó", "rompió"];
  let objeto = ["mi tarea", "mi teléfono", "el coche"];
  let momento = [
    "antes de la clase",
    "cuando estaba durmiendo",
    "mientras hacía ejercicio",
    "durante mi almuerzo",
    "mientras rezaba"
  ];

  function generarExcusa() {
    let sujetoAleatorio = sujeto[Math.floor(Math.random() * sujeto.length)];
    let accionAleatoria = accion[Math.floor(Math.random() * accion.length)];
    let objetoAleatorio = objeto[Math.floor(Math.random() * objeto.length)];
    let momentoAleatorio = momento[Math.floor(Math.random() * momento.length)];

    let excusa =
      sujetoAleatorio +
      " " +
      accionAleatoria +
      " " +
      objetoAleatorio +
      " " +
      momentoAleatorio;

    document.getElementById("excusa").innerText = excusa;
  }

  generarExcusa();

  console.log("Hello Rigo from the console!");
};
