import marcarCompletado from "./marcarCompletado";
import siguientePaso from "./siguientePaso";
import validacion from "./validaciones/validar";
import validarCorreo from "./validaciones/validarCorreo";
import validarNombre from "./validaciones/validarNombre";

//Llamamos los campos para de esta manera poder hacer la validacion de estos campos
const formulario = document.getElementById("formulario");

//Reinicio del scroll
formulario.querySelector(".formulario__body").scrollLeft = 0;

//Evento para que escuche cuando el usario coloque elementos
formulario.addEventListener("keyup", (evento) => {
  if (evento.target.tagName === "INPUT") {
    if (evento.target.id === "cantidad") {
      validacion();
    } else if (evento.target.id === "nombre-receptor") {
      validarNombre();
    } else if (evento.target.id === "correo-receptor") {
      validarCorreo();
    }
  }
});

//Accedemos al boton
const btnFormulario = document.getElementById("formulario__btn");

//Añadimos un listener
btnFormulario.addEventListener("click", (evento) => {
  evento.preventDefault();

  //Debemos de detectar en que paso estamos
  const pasoActual = document
    .querySelector(".linea-pasos__paso-check--active")
    .closest(".linea-pasos__paso").dataset.paso;

  if (pasoActual === "cantidad") {
    if (validacion()) {
      marcarCompletado("cantidad");
      siguientePaso();
    }
  } else if (pasoActual === "datos") {
    if (validarNombre() && validarCorreo()) {
      marcarCompletado("datos");
      siguientePaso();
    }
  } else if (pasoActual === "metodo") {
    marcarCompletado("metodo");
    //Dar formato a la cantidad

    const opciones = { style: "currency", currency: "MXN" };
    const formatoMoneda = new Intl.NumberFormat("es-MX", opciones);
    document.querySelector('[data-valor="cantidad"] span').innerText =
      formatoMoneda.format(formulario.cantidad.value);
    document.querySelector('[data-valor="nombre-receptor"] span').innerText =
      formulario["nombre-receptor"].value;
    document.querySelector('[data-valor="correo-receptor"] span').innerText =
      formulario["correo-receptor"].value;
    document.querySelector('[data-valor="metodo"] span').innerText =
      formulario.metodo.value;

    //Pasos para el boton
    btnFormulario.querySelector("span").innerHTML = "Trnsferir";
    btnFormulario.classList.add("formulario__btn--disabled");

    //Ocultar boton
    btnFormulario
      .querySelector('[data-icono="siguiente"]')
      .classList.remove("formulario__btn-contenedor-icono--active");
    //Mostar icono nuevo
    btnFormulario
      .querySelector('[data-icono="banco"]')
      .classList.add("formulario__btn-contenedor-icono--active");
    siguientePaso();
    //Eliminamos la clase de disabled despues de 4 segundos
    setTimeout(() => {
      btnFormulario.classList.remove("formulario__btn--disabled");
    }, 4000);
  } else if (
    pasoActual === "confirmacion" &&
    !btnFormulario.matches(".formulario__btn--disabled")
  ) {
    //Antes de hacer todo esto se puede hacer la peticion para el servidor

    //Cambio del btn a Transferir
    btnFormulario.querySelector("span").innerText = "Transfiriendo";
    //Deshabilitamos el boton
    btnFormulario.classList.add("formulario__btn--disabled");
    setTimeout(() => {
      //Ocultamos los datos
      formulario.classList.add("formulario--hidden");
      //Ahora añadimos la alertas
      document.getElementById("alerta").classList.add("alerta--active");
    }, 4000);
  }
});
