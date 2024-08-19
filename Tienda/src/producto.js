// - + - + FUNCIONES PARA EL PRODUCTO

//accedemos a productos
const producto = document.getElementById("producto");
//accedemos a la imagen
const imagenProducto = producto.querySelector(".producto__imagen");
//acceso a las thumbs
const thumbs = producto.querySelector(".producto__thumbs");
//acceso a color
const color = producto.querySelector("#propiedad-color");
//acceso a los botones
const btnDisminuirCantidad = producto.querySelector("#disminuir-cantidad");
const btnIncrementaCantidad = producto.querySelector("#incrementar-cantidad");
const inputCantidad = producto.querySelector("#cantidad");

//// + - + LISTEN + - + evento de propagacion
thumbs.addEventListener("click", (evento) => {
  //DETECCION QUE EL USUARIO HAGA CLICK EN UNA IMAGEN
  if (evento.target.tagName === "IMG") {
    //obtenemos la ruta
    const imagenSrc = evento.target.src;
    const ultimoIndice = imagenSrc.lastIndexOf("/");
    //Cortamos la cadena de texto apartir de una posicion
    const nombreImagen = imagenSrc.substring(ultimoIndice + 1);

    //reasignamos el atributo de imagenProducto
    imagenProducto.src = `./img/tennis/${nombreImagen}`;
  }

  //
});

// + - +  LISTEN PARA PROPIEDAD COLOR
color.addEventListener("click", (evento) => {
  if (evento.target.tagName === "INPUT") {
    imagenProducto.src = `./img/tennis/${evento.target.value}.jpg`;
  }
});

// + - + COLOCAMOS UN EVENT LISTENER PARA LOS BOTONES

//Como solo son dos evento trabajamos con dos
btnIncrementaCantidad.addEventListener("click", (evento) => {
  inputCantidad.value = parseInt(inputCantidad.value) + 1;
});
btnDisminuirCantidad.addEventListener("click", (evento) => {
  if (parseInt(inputCantidad.value) >= 1)
    inputCantidad.value = parseInt(inputCantidad.value) - 1;
});
