//Usaremos propagacion de eventos para que de esta manera detecte que es lo que esta realizando

//importamos la funcion de cerrarGaleria
import caourusel from "./carousel";
import cerrarGaleria from "./cerrarGaleria";
import { cargarAnteriorSiguiente } from "./mostrarImagen";
//Importamos la funcion de slide click
import slideClick from "./slideClick";

const galeria = document.getElementById("galeria");

galeria.addEventListener("click", (e) => {
  //Debemos de encontar la etiqueta mas cercana al objeto que estemos buscando
  const boton = e.target.closest("button");

  //Asegurarnos que solo devuelva en caso de que sea un boton
  //--- BOTON DE CERRAR GALERIA
  if (boton?.dataset?.accion === "cerrar-galeria") {
    cerrarGaleria();
  }

  //Para el carousel slide click
  //VER EL CONTENIDO
  if (e.target.dataset.id) {
    slideClick(e);
  }

  //PARA LA SIGUIENTE IMAGEN
  if (boton?.dataset?.accion === "siguiente-imagen") {
    cargarAnteriorSiguiente("siguiente");
  }

  //PARA LA ANTERIOR IMAGEN
  if (boton?.dataset?.accion === "anterior-imagen") {
    cargarAnteriorSiguiente("anterior");
  }

  //Boton de SCROLL

  //SCROLL ADELANTE
  if (boton?.dataset?.accion === "siguiente-slide") {
    caourusel("adelante");
  }

  //SCROLL ATRAS

  if (boton?.dataset?.accion === "anterior-slide") {
    caourusel("atras");
  }
});
