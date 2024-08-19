//Creamos la funcion para poder validar
const formulario = document.getElementById("formulario");
const validacion = () => {
  //Expresion regular para poder evaluar
  const expRegCantidad = /^[A-Z]{3}-\d{3}$/;
  //Acceso a la cantidad

  const inputCantidad = formulario.cantidad;

  //Probamos si esto es correcto
  if (expRegCantidad.test(inputCantidad.value)) {
    inputCantidad.classList.remove("formulario__input--error");
    return true;
  } else {
    inputCantidad.classList.add("formulario__input--error");

    return false;
  }
};

export default validacion;
