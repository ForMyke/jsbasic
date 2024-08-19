import fethcGeneros from "./fetchGeneros";
import obtenerGenero from "./obtenerGenero";

//Funcion para poder hacer la peticion de las peliculas
const fethcPopulares = async () => {
  const url =
    "https://api.themoviedb.org/3/movie/popular?api_key=45b7d781208fa16760aa53df19b7c509&language=es-MX&page=1";
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

export default fethcPopulares;
