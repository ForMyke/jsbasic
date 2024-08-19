import data from "./../datos/fotos";
import { cargarImagen } from "./mostrarImagen";
const galeria = document.getElementById("galeria");

const slideClick = (e) => {
  //Obtenemos el id
  let nombre;
  let descripcion;
  let ruta;

  const id = parseInt(e.target.dataset.id);
  const categoriaActiva = galeria.dataset.categoria;
  //Varibles para elementos de la base de datos

  //Extraemos los datos
  data.fotos[categoriaActiva].forEach((foto) => {
    //Colocamos la sentencia para que nos devuelva solo esos elementos
    if (foto.id === id) {
      ruta = foto.ruta;
      nombre = foto.nombre;
      descripcion = foto.descripcion;
    }
  });
  //Llamamos a al funcion y obtenemos los valores
  cargarImagen(id, nombre, ruta, descripcion);
};

export default slideClick;
