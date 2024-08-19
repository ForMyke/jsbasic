// Api de fechas
//Aqui podemos extrear la fecha  local

const FechaActual = new Date();
console.log(FechaActual);

//De aqui podemos obtener mas datos como mes,año,y mas
console.log(FechaActual.toDateString());
console.log(FechaActual.toString());
console.log(FechaActual.toTimeString());
//Dia
console.log(FechaActual.getDate());
console.log(FechaActual.getMonth());
console.log(FechaActual.getFullYear());

//Hay mas informacion acerca de esto en la libreria date-fns
