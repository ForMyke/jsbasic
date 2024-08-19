document.getElementById("boton1").addEventListener("click", (evento) => {
  const nombre = prompt("Escribre tu nombre");
  window.localStorage.setItem("usuario", nombre);
});

//Obtencion del elemento
if (window.localStorage.usuario) {
  console.log("Hola", window.localStorage.usuario);
} else {
  console.log("Hola usuario");
}

document.getElementById("boton2").addEventListener("click", (evento) => {
  //Elminar el elemento
  window.localStorage.removeItem("usuario");
});
