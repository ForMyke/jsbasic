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
export default siguientePaso;
