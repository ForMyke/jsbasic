const formulario = document.forms["formulario-donacion"];
/*
formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  //Valdiacion para los campos
  const datos = {
    correo: formulario.correo.value,
    pais: formulario.pais.value,
    donacion: formulario.donacion.value,
    fecha: formulario.fecha.value,
    terminos: formulario["terminos-y-condiciones"].value,
  };

  //Validaciones
  if (datos.correo === "") {
    console.log("Ponga un correo");
    return;
  }
  if (datos.pais === "") {
    console.log("Seleccione un pais");
    return;
  }
  if (datos.donacion === "") {
    console.log("Seleccione una cantidad");
    return;
  }
  if (datos.fecha === "") {
    console.log("Seleccione una fecha");
    return;
  }
  if (!datos.terminos) {
    console.log("Acepte los terminos y condiciones");
    return;
  }
  console.log("Enviando Datos");
});
*/

//Validacion de correo

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const datos = {
    correo: formulario.correo.value,
    pais: formulario.pais.value,
    donacion: formulario.donacion.value,
    fecha: formulario.fecha.value,
    terminos: formulario["terminos-y-condiciones"].value,
  };
  //Validadcion para correo
  const expresionRegular = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
  if (expresionRegular.test(datos.correo)) {
    console.log("El correo es correcto");
    console.log("Enviado Datos");
    return;
  } else {
    console.log("La dirección de correo electrónico no es válida.");
  }
});
