// Llamada de un objeto json
const datos = `{
  "id": 1,
  "nombre": "Miguel",
  "edad": 20,
  "vivo": true,
  "datos_extra": [
    {
      "pelo": "negro",
      "estatura": 1.8,
      "color": "amarillo",
      "ojos": "cafes"
    }
  ]
}
`;
//Para poder transformalo usamos parse()
const parse = JSON.parse(datos);
console.log(parse.nombre);

//Si queremos mandar una peticion a un ser usarmos stringify()
const usuario = {
  nombre: "Miguel",
  edad: 19,
  correo: "golomian7@hotmail.com",
};
//Usando esto lo mandamos a una pagina
JSON.stringify(usuario);
