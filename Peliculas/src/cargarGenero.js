// Corrección de la importación y el nombre de la función
import fetchGeneros from "./fetchGeneros";

const contenedorGeneros = document.getElementById("filtro-generos");

// Función asíncrona para cargar géneros
const cargarGenero = async (filtro) => {
  try {
    const generos = await fetchGeneros(filtro);

    // Opcional: limpiar el contenedor antes de agregar nuevos botones
    contenedorGeneros.innerHTML = "";

    generos.forEach((genero) => {
      // Corrección en la creación del botón
      const btn = document.createElement("button"); // Cambiado de "btn" a "button"

      // Añadir clases
      btn.classList.add("btn");

      // Corrección a innerText
      btn.innerText = genero.name; // Cambiado de innerTxt a innerText

      btn.setAttribute("data-id", genero.id);

      // Agregar el botón al contenedor
      contenedorGeneros.appendChild(btn);
    });
  } catch (error) {
    console.error("Error al cargar géneros:", error);
  }
};

export default cargarGenero;
