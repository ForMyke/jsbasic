const endpoint = "https://api.npoint.io/70786af24101b36a3868";

//Trabajamos con Async
const ObtenerDatos = async () => {
  //Esperamos que este la respuesta
  const respuesta = await fetch(endpoint);
  //Esperamos los datos
  const datos = await respuesta.json();
  //Sacamos los datos
  console.log(datos);
};
//Llamamos la funcion
ObtenerDatos();
