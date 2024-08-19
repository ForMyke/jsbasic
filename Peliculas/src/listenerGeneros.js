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
