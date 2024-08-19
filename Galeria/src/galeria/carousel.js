const galeria = document.getElementById("galeria");

const caourusel = (direccion) => {
  //Creamos el observador

  //Añadimos las funciones propias de Intersection Observer
  const opciones = {
    root: document.querySelector(".galeria__carousel"),
    rootMargin: "0px",
    threshold: 0.9,
  };

  const observador = new IntersectionObserver((entradas) => {
    //DENTRO del arreglo guadrmaos los elementos visibles
    const slideVisible = entradas.filter((entrada) => {
      if (entrada.isIntersecting === true) {
        return entrada;
      }
    });

    //Obtemos e Ultimo Slide
    if (direccion === "atras") {
      const primerSlideVisible = slideVisible[0];
      const indexPrimerSlideVisble = entradas.indexOf(primerSlideVisible);
      //accedemos a entradas
      if (indexPrimerSlideVisble >= 1) {
        entradas[indexPrimerSlideVisble - 1].target.scrollIntoView({
          behavior: "smooth",
          inline: "start",
        });
      }
    } else if (direccion === "adelante") {
      const ultimaSlideVisible = slideVisible[slideVisible.length - 1];
      const indexUltimoSlideVisble = entradas.indexOf(ultimaSlideVisible);

      if (entradas.length - 1 > indexUltimoSlideVisble) {
        entradas[ultimaSlideVisible + 1].target.scrollIntoView({
          behavior: "smooth",
          inline: "start",
        });
      }
    }

    //Al ejecutar el codigo dejamos de observar
    const slides = galeria.querySelectorAll(".galeria__carousel-slide");

    slides.forEach((slide) => {
      // observamos la slide
      observador.unobserve(slide);
    });
  }, opciones);

  //Obtenemos todos los slides
  const slides = galeria.querySelectorAll(".galeria__carousel-slide");

  slides.forEach((slide) => {
    // observamos la slide
    observador.observe(slide);
  });
};

export default caourusel;
