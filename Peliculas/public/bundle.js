'use strict';

//Funcion para poder hacer la peticion de las peliculas
const fethcGeneros = async (filtro = "movie") => {
  //Obtenemos que genero es el que queremos
  const tipo = filtro === "movie" ? "movie" : "tv";
  const url = `https://api.themoviedb.org/3/genre/${tipo}/list?api_key=45b7d781208fa16760aa53df19b7c509&language=es-MX&page=1`;
  try {
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    return datos.genres;
  } catch (error) {
    console.log(error);
  }
};

const obtenerGenero = (id, generos) => {
  let nombre;
  generos.forEach((elemento) => {
    //Nos aseguramos de que sean iguales
    if (id === elemento.id) {
      //Devolvemos el valor
      nombre = elemento.name;
    }
  });
  return nombre;
};

//Funcion para poder hacer la peticion de las peliculas
const fethcPopulares = async (filtro = "movie") => {

  const url = `https://api.themoviedb.org/3/${filtro}/popular?api_key=45b7d781208fa16760aa53df19b7c509&language=es-MX&page=1`;
  try {
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    const generos = await fethcGeneros();
    const resultados = datos.results;
    resultados.forEach((resultado) => {
      resultado.genero = obtenerGenero(resultado.genre_ids[0], generos);
    });
    return resultados;
  } catch (error) {
    console.log(error);
  }
};

const cargarTitulos = (pelicula) => {
  //Contenedor
  const contenedor = document.querySelector("#populares .main__grid");
  // Función para poder cargar los títulos
  contenedor.innerHTML = "";
  pelicula.forEach((resultado) => {
    const plantilla = `<div class="main__media">
              <a href="#" class="main__media-thumb">
                <img class="main__media-img" src="https://image.tmdb.org/t/p/w500/${resultado.poster_path}" alt="${resultado.title}" />
              </a>
              <p class="main__media-titulo">${resultado.title}</p>
              <p class="main__media-fecha">${resultado.genero}</p>
            </div>`;
    // Creación dinámica de los apartados
    contenedor.insertAdjacentHTML("beforeend", plantilla);
  });
};

// Corrección de la importación y el nombre de la función

const contenedorGeneros = document.getElementById("filtro-generos");

// Función asíncrona para cargar géneros
const cargarGenero = async (filtro) => {
  try {
    const generos = await fethcGeneros(filtro);

    // Opcional: limpiar el contenedor antes de agregar nuevos botones
    contenedorGeneros.innerHTML = "";

    generos.forEach((genero) => {
      // Corrección en la creación del botón
      const btn = document.createElement("button"); // Cambiado de "btn" a "button"

      // Añadir clases
      btn.classList.add("btn");

      // Corrección a innerText
      btn.innerText = genero.name; // Cambiado de innerTxt a innerText

      btn.setAttribute("data-id", genero.id);

      // Agregar el botón al contenedor
      contenedorGeneros.appendChild(btn);
    });
  } catch (error) {
    console.error("Error al cargar géneros:", error);
  }
};

const fetchBusqueda = () => {
  //Obtencion de los valores

  //Tipo
  const tipo = document.querySelector(".main__filtros .btn--active").id;
  //idGenero
  const idGenero = document.querySelector("#filtro-generos .btn--active")
    ?.dataset.id;
  const añoInicial = document.getElementById("años-min").value || 1950;
  //Obtener el año con la API DE FECHAS
  const añoFinal = document.getElementById("años-min").value || 2024;

  console.log("Buscando");
  console.log(tipo, idGenero, añoInicial, añoFinal);
};

const btn = document.getElementById("btn-buscar");
btn.addEventListener("click", (evento) => {
  fetchBusqueda();
});

const contenedor = document.getElementById("filtro-generos");

contenedor.addEventListener("click", (evento) => {
  evento.preventDefault();
  //Nos aseguramos que solo sea a un boton
  if (evento.target.closest("button")) {
    //Quitamos la clases cade vez aue la usemos
    contenedor.querySelector(".btn--active")?.classList.remove("btn--active");
    evento.target.classList.add("btn--active");
  }
});

const filtroPelicula = document.getElementById("movie");
const filtroSerie = document.getElementById("tv");
filtroPelicula.addEventListener("click", async (evento) => {
  evento.preventDefault();
  cargarGenero("movie");
  const resultados = await fethcPopulares("movie");
  cargarTitulos(resultados);
  filtroSerie.classList.remove("btn--active");
  filtroPelicula.classList.add("btn--active");
  document.querySelector("#populares .main__titulo").innerText =
    "Peliculas Populares";
});

filtroSerie.addEventListener("click", async (evento) => {
  evento.preventDefault();
  cargarGenero("tv");
  const resultados = await fethcPopulares("tv");
  cargarTitulos(resultados);
  filtroPelicula.classList.remove("btn--active");
  filtroSerie.classList.add("btn--active");
  document.querySelector("#populares .main__titulo").innerText =
    "Series Populares";
});

const pelis = async () => {
  const pelicula = await fethcPopulares();
  cargarTitulos(pelicula);
  cargarGenero("movie");
};
pelis();
//# sourceMappingURL=bundle.js.map
