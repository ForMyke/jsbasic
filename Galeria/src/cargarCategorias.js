import dataCategorias from "./datos/categorias";

//Extraemos las categorias de dataCategorias
const { categorias } = dataCategorias;
//Acceso a categorias
const contenedorCategorias = document.getElementById("categorias");

//Creamos los demas de categorias
categorias.forEach((categoria) => {
  //Creacion de un elementos usando DOM
  const nuevaCategoria = document.createElement("a");
  //Debemos de colocar lo que va adentro de esta etiqueta
  //Primero pondremos una platilla
  const plantilla = `<img class="categoria__img" src="${categoria.imagenPortada}" alt="" />
            <div class="categoria__datos">
              <p class="categoria__nombre">${categoria.nombre}</p>
              <p class="categoria__numero-fotos">${categoria.numeroFotos} Fotos</p>
            </div>`;

  //Ahora tenemos el elemento
  nuevaCategoria.innerHTML = plantilla;

  //Creacion Elemento
  nuevaCategoria.classList.add("categoria");
  nuevaCategoria.href = "#";
  nuevaCategoria.dataset.categoria = categoria.id;

  //Agregamos al dom
  contenedorCategorias.append(nuevaCategoria);
});
