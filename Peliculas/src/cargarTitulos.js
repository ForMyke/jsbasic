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
export default cargarTitulos;
