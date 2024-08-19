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

export default fetchBusqueda;
