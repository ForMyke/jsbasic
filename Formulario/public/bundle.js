'use strict';

const marcarCompletado = (paso) => {
  // Accedemos al paso
  document
    .querySelector(`.linea-pasos [data-paso="${paso}"] span`)
    .classList.add("linea-pasos__paso-check--checked");
};

const pasos = [...document.querySelectorAll(".linea-pasos__paso")];
const siguientePaso = () => {
  //Logica para el siguiente paso

  //Primero buscamos en que posicion nos encontramos
  const pasoActivo = document
    .querySelector(".linea-pasos__paso-check--active")
    .closest(".linea-pasos__paso");

  //Debemos de conocer la posicion dentro del arreglo
  const indexPasoActivo = pasos.indexOf(pasoActivo);

  //Preguntamos
  if (indexPasoActivo < pasos.length - 1) {
    pasoActivo
      .querySelector("span")
      .classList.remove("linea-pasos__paso-check--active");
    //Se la colocamos al siguiente paso
    pasos[indexPasoActivo + 1]
      .querySelector("span")
      .classList.add("linea-pasos__paso-check--active");

    //Obtenmos el id del elemento a mostrar
    const id = pasos[indexPasoActivo + 1].dataset.paso;
    document
      .querySelector(`.formulario__body [data-paso= "${id}"]`)
      .scrollIntoView({
        inline: "start",
        behavior: "smooth",
      });
  }
};

//Creamos la funcion para poder validar
const formulario$2 = document.getElementById("formulario");
const validacion = () => {
  //Expresion regular para poder evaluar
  const expRegCantidad = /^[A-Z]{3}-\d{3}$/;
  //Acceso a la cantidad

  const inputCantidad = formulario$2.cantidad;

  //Probamos si esto es correcto
  if (expRegCantidad.test(inputCantidad.value)) {
    inputCantidad.classList.remove("formulario__input--error");
    return true;
  } else {
    inputCantidad.classList.add("formulario__input--error");

    return false;
  }
};

const validarCorreo = () => {
  // Expresion regular para validar un correo.
  const expRegCorreo = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

  // Obtenemos los inputs
  const inputCorreo = formulario["correo-receptor"];

  // Comprobamos que el nombre y correo sean correctos.
  if (!expRegCorreo.test(inputCorreo.value)) {
    inputCorreo.classList.add("formulario__input--error");
    return false;
  } else {
    inputCorreo.classList.remove("formulario__input--error");
    return true;
  }
};

const validarNombre = () => {
  // Aceptamos cualquier digito (0-9), y un punto con decimales (opcional)
  const expRegNombre = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;

  // Obtenemos el input
  const inputNombre = formulario["nombre-receptor"];

  // Comprobamos que el nombre sea correcto.
  if (!expRegNombre.test(inputNombre.value)) {
    inputNombre.classList.add("formulario__input--error");
    return false;
  } else {
    inputNombre.classList.remove("formulario__input--error");
    return true;
  }
};

//Llamamos los campos para de esta manera poder hacer la validacion de estos campos
const formulario$1 = document.getElementById("formulario");

//Reinicio del scroll
formulario$1.querySelector(".formulario__body").scrollLeft = 0;

//Evento para que escuche cuando el usario coloque elementos
formulario$1.addEventListener("keyup", (evento) => {
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
      formatoMoneda.format(formulario$1.cantidad.value);
    document.querySelector('[data-valor="nombre-receptor"] span').innerText =
      formulario$1["nombre-receptor"].value;
    document.querySelector('[data-valor="correo-receptor"] span').innerText =
      formulario$1["correo-receptor"].value;
    document.querySelector('[data-valor="metodo"] span').innerText =
      formulario$1.metodo.value;

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
      formulario$1.classList.add("formulario--hidden");
      //Ahora añadimos la alertas
      document.getElementById("alerta").classList.add("alerta--active");
    }, 4000);
  }
});

const linea = document.getElementById("linea-pasos");

linea.addEventListener("click", (evento) => {
  //Ahora solo debe de ejecutarse el codigo cuando este en la linea de pasos
  if (!evento.target.closest(".linea-pasos__paso")) return;
  //Paso en el que estamos
  const pasoActual = document
    .querySelector(".linea-pasos__paso-check--active")
    .closest(".linea-pasos__paso").dataset.paso;

  if (pasoActual === "cantidad") {
    if (!validacion()) return;
  } else if (pasoActual === "datos") {
    if (!validarNombre() || !validarCorreo()) return;
  }
  //Validacion para que solo me permita mover a pasos completados
  const completado = evento.target.closest(".linea-pasos__paso");

  if (completado.querySelector(".linea-pasos__paso-check--checked")) {
    console.log("Cambiando de paso ");
    //Ahora del paso en el que nos encontramos vamos as remover la linea de active
    const pasoActual = linea.querySelector(".linea-pasos__paso-check--active");
    pasoActual.classList.remove("linea-pasos__paso-check--active");

    //Sacamos el id
    const id = completado.dataset.paso;
    linea
      .querySelector(`[data-paso="${id}"] span`)
      .classList.add("linea-pasos__paso-check--active");

    //Cambiamos de donde estabamos
    document
      .querySelector(`.formulario__body [data-paso="${id}"]`)
      .scrollIntoView({
        inline: "start",
        behavior: "smooth",
      });
  }
});
//# sourceMappingURL=bundle.js.map
