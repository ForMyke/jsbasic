import cargarGenero from "./cargarGenero";
import cargarTitulos from "./cargarTitulos";
import fethcPopulares from "./fetchPopulares";

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
