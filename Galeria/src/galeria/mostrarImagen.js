//Importar las fotos desde de fotos
import data from "./../datos/fotos";
const galeria = document.getElementById("galeria");
const cargarImagen = (id, nombre, ruta, descripcion) => {
  galeria.querySelector(".galeria__imagen").src = ruta;
  galeria.querySelector(".galeria__imagen").dataset.idImagen = id;
  galeria.querySelector(".galeria__titulo").innerText = nombre;
  galeria.querySelector(".galeria__descripcion-imagen-activa").innerText =
    descripcion;

  // Para esto necesitamos 3 elementos
  const categoriaActual = galeria.dataset.categoria;
  //Accedemos a las fotos categoria actual
  const fotos = data.fotos[categoriaActual];

  //Seleccionamos el mismo id de la categoria

  //Guardamos el Index para despues poder usarlo
  let indexImagenActual;
  fotos.forEach((foto, index) => {
    if (foto.id === id) {
      indexImagenActual = index;
    }
  });

  //Ahora debemos de seleccionar el caourusel

  //Preguntamos la primera vez que, ya que esto no esta definido para esto la slides deben de ser mayores a 0
  if (galeria.querySelectorAll(".galeria__carousel-slide").length > 0) {
    // Borramos clase
    galeria
      .querySelector(".galeria__carousel-slide--active")
      .classList.remove("galeria__carousel-slide--active");

    // Ahora asignamos el método
    galeria
      .querySelectorAll(".galeria__carousel-slide")
      [indexImagenActual].classList.add("galeria__carousel-slide--active");
  }
};

//Funcion para cargar imagen anterior/siguiente

const cargarAnteriorSiguiente = (direccion) => {
  //Debemos de extrear los datos para poder continuar con la siguiete imagen
  const categoriaActual = galeria.dataset.categoria;
  const fotos = data.fotos[categoriaActual];

  //Necesitamos los datos especificos de la imagen actual y debemos de pasarlo a Int
  const idImagenActual = parseInt(
    galeria.querySelector(".galeria__imagen").dataset.idImagen
  );

  //Ahora con un forEach obtenemos el index

  let indexImagenActual;
  fotos.forEach((foto, index) => {
    if (foto.id === idImagenActual) {
      indexImagenActual = index;
    }
  });

  //Creamos una funcion para poder cargar la siguiente
  if (direccion === "siguiente") {
    //Primero nos debemos asegurar que exista
    if (fotos[indexImagenActual + 1]) {
      const { id, nombre, ruta, descripcion } = fotos[indexImagenActual + 1];
      cargarImagen(id, nombre, ruta, descripcion);
    }
  } else if (direccion === "anterior") {
    if (fotos[indexImagenActual - 1]) {
      const { id, nombre, ruta, descripcion } = fotos[indexImagenActual - 1];
      cargarImagen(id, nombre, ruta, descripcion);
    }
  }
};

//Exportamos las dos funciones
export { cargarImagen, cargarAnteriorSiguiente };
