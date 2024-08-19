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
export default obtenerGenero;
