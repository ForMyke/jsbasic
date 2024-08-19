//Importamos las fotos
import dataFotos from "./datos/fotos";
import cerrarGaleria from "./galeria/cerrarGaleria";
import { cargarImagen } from "./galeria/mostrarImagen";
//Tenemos que acceder al contenedor
const contenedorCategorias = document.getElementById("categorias");
//Extraemos galeria
const galeria = document.getElementById("galeria");

//Añadimos un evento para que este se pueda propagar y solo ocupar un evento

contenedorCategorias.addEventListener("click", (e) => {
  //Colocamos esto para que no tenga las configuraciones previas
  e.preventDefault();

  if (e.target.closest("a")) {
    galeria.classList.add("galeria--active");
    //Ocultamos la barra lateral
    document.body.style.overflow = "hidden";

    //Cargamos la imagen activa, dentro de los argumentos pasamos la imagen que necesitamos
    //Cargamos las imagnes de forma dinamica, para esto debemos acceder solo a las de la categoria activa
    const categoriaActiva = e.target.closest("a").dataset.categoria;
    //Accedemos al valor de categoria para de esta manera poder buscar la foto
    galeria.dataset.categoria = categoriaActiva;
    //Accedemos a las fotos
    const fotos = dataFotos.fotos[categoriaActiva];

    //Antes de acceder debemos eliminar la slides
    const clear = galeria.querySelector(".galeria__carousel-slides");

    //Colocamos los atributos para de esta manera poder colocar las imagenes de la funcion
    const { id, nombre, ruta, descripcion } = fotos[0];
    cargarImagen(id, nombre, ruta, descripcion);
    clear.innerHTML = "";

    //Para cada foto debemos de cargarla
    fotos.forEach((foto) => {
      const slide = `<a href="#" class="galeria__carousel-slide">
                  <img
                    class="galeria__carousel-image"
                    //Colocamos la ruta para la foto y le agregamos un data id 
                    src="${foto.ruta}" data-id="${foto.id}"
                    alt=""
                  />
                </a>`;
      galeria.querySelector(".galeria__carousel-slides").innerHTML += slide;
    });
    //Remarcamos con un borde blanco la imagen que se esta usando
    galeria
      .querySelector(".galeria__carousel-slide")
      .classList.add("galeria__carousel-slide--active");
  }
});
