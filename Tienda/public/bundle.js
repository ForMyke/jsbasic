'use strict';

// - + - + FUNCIONES PARA EL PRODUCTO

//accedemos a productos
const producto$1 = document.getElementById("producto");
//accedemos a la imagen
const imagenProducto = producto$1.querySelector(".producto__imagen");
//acceso a las thumbs
const thumbs = producto$1.querySelector(".producto__thumbs");
//acceso a color
const color = producto$1.querySelector("#propiedad-color");
//acceso a los botones
const btnDisminuirCantidad = producto$1.querySelector("#disminuir-cantidad");
const btnIncrementaCantidad = producto$1.querySelector("#incrementar-cantidad");
const inputCantidad = producto$1.querySelector("#cantidad");

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

//Simulamos una base de datos con objetos
var data = {
  productos: [
    {
      id: "1",
      nombre: "Tennis Converse Standard",
      descripcion: "Consectetur adipisicing elit.",
      precio: 500.0,
      colores: ["negro", "rojo", "amarillo"],
      tamaños: ["1,5", "2", "2,5", "3", "4"],
    },
    {
      id: "2",
      nombre: "Tennis Converse 2000",
      descripcion: "Consectetur adipisicing elit.",
      precio: 450.0,
      colores: ["negro", "rojo", "amarillo"],
      tamaños: ["1,5", "2", "2,5", "3", "4"],
    },
  ],
};

const botonesAbrirCarrito = document.querySelectorAll(
  '[data-accion="abrir-carrito"]'
);
const botonesCerrarCarrito = document.querySelectorAll(
  '[data-accion="cerrar-carrito"]'
);
const btnAgregarAlCarrito = document.getElementById("agregar-al-carrito");
document.getElementById("carrito__btn-comprar");
const ventanaCarrito = document.getElementById("carrito");
const producto = document.getElementById("producto");
const notificacion = document.getElementById("notificacion");
let carrito = [];

const formatearMoneda = new Intl.NumberFormat("es-MX", {
  style: "currency",
  currency: "MXN",
});

const renderCarrito = () => {
  ventanaCarrito.classList.add("carrito--active");

  // Eliminamos todos los productos anteriores para construir el carrito desde cero.
  const productosAnteriores = ventanaCarrito.querySelectorAll(
    ".carrito__body .carrito__producto"
  );
  if (productosAnteriores) {
    productosAnteriores.forEach((producto) => producto.remove());
  }

  let total = 0;

  // Comprobamos si hay productos
  if (carrito.length < 1) {
    // Ponemos la clase de carrito vacio
    ventanaCarrito.classList.add("carrito--vacio");
  } else {
    // Eliminamos la clase de carrito vacio
    ventanaCarrito.classList.remove("carrito--vacio");

    // Iteramos sobre cada producto del carrito y lo mostramos
    carrito.forEach((productoCarrito) => {
      // Iteramos sobre la lista de productos.
      data.productos.forEach((productoBaseDatos) => {
        // Obtenemos el precio del archivo de producto.js
        // Cuando el id del item del carrito sea el mismo que alguno de la lista.
        if (productoCarrito.id === productoBaseDatos.id) {
          // Tomamos el precio y creamos una nueva propiedad en el objeto del item.
          productoCarrito.precio = productoBaseDatos.precio;

          total += productoCarrito.precio * productoCarrito.cantidad;
        }
      });

      // Establecemos la ruta de la imagen que vamos a querer mostrar.
      let thumbSrc = producto.querySelectorAll(".producto__thumb-img")[0].src;
      if (productoCarrito.color === "rojo") {
        thumbSrc = "./img/thumbs/rojo.jpg";
      } else if (productoCarrito.color === "amarillo") {
        thumbSrc = "./img/thumbs/amarillo.jpg";
      }
      // Creamos una plantilla del codigo HTML.
      const plantillaProducto = `
					<div class="carrito__producto-info">
						<img src="${thumbSrc}" alt="" class="carrito__thumb" />
						<div>
							<p class="carrito__producto-nombre">
								<span class="carrito__producto-cantidad">${productoCarrito.cantidad} x </span>${productoCarrito.nombre}
							</p>

							<p class="carrito__producto-propiedades">Tamaño:<span>${productoCarrito.tamaño}</span> Color:<span>${
                productoCarrito.color
              }</span></p>
						</div>
					</div>
					<div class="carrito__producto-contenedor-precio">
						<button class="carrito__btn-eliminar-item" data-accion="eliminar-item-carrito">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								viewBox="0 0 16 16"
							>
								<path
									d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"
								/>
							</svg>
						</button>
						<p class="carrito__producto-precio">${formatearMoneda.format(productoCarrito.precio * productoCarrito.cantidad)}</p>
					</div>
				`;

      // Creamos un div
      const itemCarrito = document.createElement("div");

      // Le agregamos la clase de carrito__producto.
      itemCarrito.classList.add("carrito__producto");

      // Le insertamos la plantilla dentro del elemento.
      itemCarrito.innerHTML = plantillaProducto;

      // Agregamos el producto a la ventana del carrito.
      ventanaCarrito.querySelector(".carrito__body").appendChild(itemCarrito);
    });
  }

  ventanaCarrito.querySelector(".carrito__total").innerText =
    formatearMoneda.format(total);
};

// Abrir carrito
botonesAbrirCarrito.forEach((boton) => {
  boton.addEventListener("click", (e) => {
    renderCarrito();
  });
});

// Cerrar carrito
botonesCerrarCarrito.forEach((boton) => {
  boton.addEventListener("click", (e) => {
    ventanaCarrito.classList.remove("carrito--active");
  });
});

// Agregar al carrito
btnAgregarAlCarrito.addEventListener("click", (e) => {
  // Obtenemos los datos del producto, en este caso los obtengo desde la pagina del producto.
  // pero tambien se puede hacer una peticion al servidor para validar los datos.
  const id = producto.dataset.productoId;
  const nombre = producto.querySelector(".producto__nombre").innerText;
  const cantidad = parseInt(producto.querySelector("#cantidad").value);
  const color = producto.querySelector("#propiedad-color input:checked").value;
  const tamaño = producto.querySelector(
    "#propiedad-tamaño input:checked"
  ).value;

  // Comprobamos que haya mas de un elemento en el carrito.
  if (carrito.length > 0) {
    // Variable que usamos para saber si el producto ya esta en el carrito o no.
    let productoEnCarrito = false;

    // Por cada elemento del carrito comprobamos que no tenga el mismo id, nombre y tamaño.
    // En caso de que el condicional se cumpla es que el producto ya esta en el carrito, asi que solo aumentamos la cantidad.
    carrito.forEach((item) => {
      if (
        item.id === id &&
        item.nombre === nombre &&
        item.color === color &&
        item.tamaño === tamaño
      ) {
        // El producto ya esta en el carrito, aumentamos la cantidad.
        item.cantidad += cantidad;
        productoEnCarrito = true;
      }
    });

    if (!productoEnCarrito) {
      carrito.push({
        id: id,
        nombre: nombre,
        cantidad: cantidad,
        color: color,
        tamaño: tamaño,
      });
    }
  } else {
    // Si no hay ningun elemento entonces lo agregamos directamente.
    carrito.push({
      id: id,
      nombre: nombre,
      cantidad: cantidad,
      color: color,
      tamaño: tamaño,
    });
  }

  let imagenSrc = producto.querySelectorAll(".producto__thumb-img")[0].src;
  //Condicional
  if (color === "rojo") {
    imagenSrc = "./img/thumbs/rojo.jpg";
  } else if (color === "amarillo") {
    imagenSrc = "./img/thumbs/amarillo.jpg";
  }
  //Notoificacion
  notificacion.querySelector("img").src = imagenSrc;
  notificacion.classList.add("notificacion--active");
  //Tiempo para que pueda desaparecer la imagen
  setTimeout(() => {
    notificacion.classList.remove("notificacion--active");
  }, 5000);
});

//Eliminar elementos del Carritos
ventanaCarrito.addEventListener("click", (evento) => {
  //Debemos de acceder donde esta la ventana
  evento.target;
  if (
    evento.target.closest("button")?.dataset.accion === "eliminar-item-carrito"
  ) {
    //Elemento a borrar
    const elementoBorrar = evento.target.closest(".carrito__producto");
    //Metemos los elementos dentro de un arreglo
    const indexProducto = [
      ...ventanaCarrito.querySelectorAll(".carrito__producto"),
    ].indexOf(elementoBorrar);

    carrito = carrito.filter((item, index) => {
      if (index !== indexProducto) {
        return item;
      }
    });
    renderCarrito();
  }

  //Devolvemos todo lo que sea diferete a lo que esta en el arreglo

  //Agregamos la notificacion del carrito
});

//Comprar del carrito
ventanaCarrito
  .querySelector("#carrito__btn-comprar")
  .addEventListener("click", () => {
    console.log("Comprado");
  });

//Tablas de la pagina

class Tabs {
  constructor(idElemento) {
    //acceso a tabs
    this.Tabs = document.getElementById(idElemento);
    this.nav = document.querySelector(".tabs");

    this.nav.addEventListener("click", (evento) => {
      if ([...evento.target.classList].includes("tabs__button")) {
        //Obetenemos el tab que queremos mostrar
        const tab = evento.target.dataset.tab;
        //Removemos la clase
        if (this.Tabs.querySelector(".tab--active")) {
          this.Tabs.querySelector(".tab--active").classList.remove(
            "tab--active"
          );
        }
        if (this.Tabs.querySelector(".tabs__button--active")) {
          this.Tabs.querySelector(".tabs__button--active").classList.remove(
            "tabs__button--active"
          );
        }
        this.Tabs.querySelector(`#${tab}`).classList.add("tab--active");
        //Añadimos la clase activa para el boton
        evento.target.classList.add("tabs__button--active");
      }
    });
  }
}

//Instacia para crear el componente de pestañas
new Tabs("mas-informacion");
