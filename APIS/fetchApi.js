const endpoint = "https://api.npoint.io/70786af24101b36a3868";

//Hacemos un Fetch
fetch(endpoint)
  .then((respuesta) => {
    console.log("Se conecto");
    //Dentro de aqui creamos una promesa en caso de que responda
    const promesa = respuesta.json();
    promesa
      .then((datos) => {
        console.log(datos.nombre);
      })
      .catch((error) => {
        console.log(console.log(error));
      });
  })
  .catch((error) => {
    console.log(error);
  });
