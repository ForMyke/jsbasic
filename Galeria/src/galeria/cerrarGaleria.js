const galeria = document.getElementById("galeria");
//Funcion para poder cerrar la galeria

const cerrarGaleria = () => {
  galeria.classList.remove("galeria--active");

  //Colocamos el scroll
  document.body.style.overflow = "";
};

export default cerrarGaleria;
