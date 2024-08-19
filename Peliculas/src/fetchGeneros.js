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

export default fethcGeneros;
