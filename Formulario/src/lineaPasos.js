import validacion from "./validaciones/validar";
import validarCorreo from "./validaciones/validarCorreo";
import validarNombre from "./validaciones/validarNombre";

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
