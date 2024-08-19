import fethcPopulares from "./fetchPopulares";
import cargarTitulos from "./cargarTitulos";
import cargarGenero from "./cargarGenero";
import "./listernerBuscar";
import "./listenerGeneros";
import "./botonesFiltros";
const pelis = async () => {
  const pelicula = await fethcPopulares();
  cargarTitulos(pelicula);
  cargarGenero("movie");
};
pelis();
