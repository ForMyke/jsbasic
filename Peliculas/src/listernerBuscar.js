import fetchBusqueda from "./fecthBusqueda";

const btn = document.getElementById("btn-buscar");
btn.addEventListener("click", (evento) => {
  fetchBusqueda();
});
