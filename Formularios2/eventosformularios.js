//Acceso al formulario
const formulario1 = document.forms["formulario-donacion"];

//Evento para detectar que el usario intenta mandar el formulario
formulario1.addEventListener("submit", (evento) => {
  evento.preventDefault();
  console.log("enviando datos");
});

//Evento Change
formulario1.pais.addEventListener("change", (evento) => {
  console.log("El pais cambio");
});

//Evento para un radio button
formulario1["cantidad-5"].addEventListener("change", (evento) => {
  console.log("La cantidad cambio");
});
formulario1["cantidad-10"].addEventListener("change", (evento) => {
  console.log("La cantidad cambio a " + evento.target.value);
});

//EVENTO FOCUS
formulario1.correo.addEventListener("focus", (evento) => {
  console.log("El input  de correo es el focus");
});

//EVENTO BLUR
formulario1.correo.addEventListener("blur", (evento) => {
  console.log("El input  de correo ahora es blur");
});

//Acceso a la tecla que presiono
formulario1.correo.addEventListener("keydown", (evento) => {
  console.log(evento);
});

//Acceso a tecla levantada
formulario1.correo.addEventListener("keyup", (evento) => {
  console.log(evento);
});
