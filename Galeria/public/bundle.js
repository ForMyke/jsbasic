'use strict';

var data = {
  fotos: {
    america: [
      {
        id: 1,
        nombre: "America 1",
        descripcion:
          "America 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/america/1.jpg",
      },
      {
        id: 2,
        nombre: "America 2",
        descripcion:
          "America 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/america/2.jpg",
      },
      {
        id: 3,
        nombre: "America 3",
        descripcion:
          "America 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/america/3.jpg",
      },
      {
        id: 4,
        nombre: "America 4",
        descripcion:
          "America 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/america/4.jpg",
      },
      {
        id: 5,
        nombre: "America 5",
        descripcion:
          "America 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/america/5.jpg",
      },
      {
        id: 6,
        nombre: "America 6",
        descripcion:
          "America 6 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/america/6.jpg",
      },
      {
        id: 7,
        nombre: "America 7",
        descripcion:
          "America 7 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/america/7.jpg",
      },
      {
        id: 8,
        nombre: "America 8",
        descripcion:
          "America 8 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/america/8.jpg",
      },
      {
        id: 9,
        nombre: "America 9",
        descripcion:
          "America 9 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/america/9.jpg",
      },
      {
        id: 10,
        nombre: "America 10",
        descripcion:
          "America 10 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/america/10.jpg",
      },
    ],
    europa: [
      {
        id: 11,
        nombre: "Europa 1",
        descripcion:
          "Europa 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/europa/1.jpg",
      },
      {
        id: 12,
        nombre: "Europa 2",
        descripcion:
          "Europa 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/europa/2.jpg",
      },
      {
        id: 13,
        nombre: "Europa 3",
        descripcion:
          "Europa 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/europa/3.jpg",
      },
      {
        id: 14,
        nombre: "Europa 4",
        descripcion:
          "Europa 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/europa/4.jpg",
      },
      {
        id: 15,
        nombre: "Europa 5",
        descripcion:
          "Europa 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/europa/5.jpg",
      },
      {
        id: 16,
        nombre: "Europa 6",
        descripcion:
          "Europa 6 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/europa/6.jpg",
      },
      {
        id: 17,
        nombre: "Europa 7",
        descripcion:
          "Europa 7 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/europa/7.jpg",
      },
      {
        id: 18,
        nombre: "Europa 8",
        descripcion:
          "Europa 8 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/europa/8.jpg",
      },
      {
        id: 19,
        nombre: "Europa 9",
        descripcion:
          "Europa 9 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/europa/9.jpg",
      },
      {
        id: 20,
        nombre: "Europa 10",
        descripcion:
          "Europa 10 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/europa/10.jpg",
      },
    ],

    africa: [
      {
        id: 21,
        nombre: "África 1",
        descripcion:
          "África 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/africa/1.jpg",
      },
      {
        id: 22,
        nombre: "África 2",
        descripcion:
          "África 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/africa/2.jpg",
      },
      {
        id: 23,
        nombre: "África 3",
        descripcion:
          "África 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/africa/3.jpg",
      },
      {
        id: 24,
        nombre: "África 4",
        descripcion:
          "África 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/africa/4.jpg",
      },
      {
        id: 25,
        nombre: "África 5",
        descripcion:
          "África 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/africa/5.jpg",
      },
      {
        id: 26,
        nombre: "África 6",
        descripcion:
          "África 6 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/africa/6.jpg",
      },
      {
        id: 27,
        nombre: "África 7",
        descripcion:
          "África 7 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/africa/7.jpg",
      },
      {
        id: 28,
        nombre: "África 8",
        descripcion:
          "África 8 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/africa/8.jpg",
      },
      {
        id: 29,
        nombre: "África 9",
        descripcion:
          "África 9 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/africa/9.jpg",
      },
      {
        id: 30,
        nombre: "África 10",
        descripcion:
          "África 10 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/africa/10.jpg",
      },
    ],
    asia: [
      {
        id: 31,
        nombre: "Asia 1",
        descripcion:
          "Asia 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/asia/1.jpg",
      },
      {
        id: 32,
        nombre: "Asia 2",
        descripcion:
          "Asia 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/asia/2.jpg",
      },
      {
        id: 33,
        nombre: "Asia 3",
        descripcion:
          "Asia 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/asia/3.jpg",
      },
      {
        id: 34,
        nombre: "Asia 4",
        descripcion:
          "Asia 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/asia/4.jpg",
      },
      {
        id: 35,
        nombre: "Asia 5",
        descripcion:
          "Asia 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/asia/5.jpg",
      },
      {
        id: 36,
        nombre: "Asia 6",
        descripcion:
          "Asia 6 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/asia/6.jpg",
      },
      {
        id: 37,
        nombre: "Asia 7",
        descripcion:
          "Asia 7 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/asia/7.jpg",
      },
      {
        id: 38,
        nombre: "Asia 8",
        descripcion:
          "Asia 8 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/asia/8.jpg",
      },
      {
        id: 39,
        nombre: "Asia 9",
        descripcion:
          "Asia 9 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/asia/9.jpg",
      },
      {
        id: 40,
        nombre: "Asia 10",
        descripcion:
          "Asia 10 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/asia/10.jpg",
      },
    ],
    oceania: [
      {
        id: 41,
        nombre: "Oceania 1",
        descripcion:
          "Oceania 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/oceania/1.jpg",
      },
      {
        id: 42,
        nombre: "Oceania 2",
        descripcion:
          "Oceania 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/oceania/2.jpg",
      },
      {
        id: 43,
        nombre: "Oceania 3",
        descripcion:
          "Oceania 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/oceania/3.jpg",
      },
      {
        id: 44,
        nombre: "Oceania 4",
        descripcion:
          "Oceania 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/oceania/4.jpg",
      },
      {
        id: 45,
        nombre: "Oceania 5",
        descripcion:
          "Oceania 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/oceania/5.jpg",
      },
      {
        id: 46,
        nombre: "Oceania 6",
        descripcion:
          "Oceania 6 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/oceania/6.jpg",
      },
      {
        id: 47,
        nombre: "Oceania 7",
        descripcion:
          "Oceania 7 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/oceania/7.jpg",
      },
      {
        id: 48,
        nombre: "Oceania 8",
        descripcion:
          "Oceania 8 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/oceania/8.jpg",
      },
      {
        id: 49,
        nombre: "Oceania 9",
        descripcion:
          "Oceania 9 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/oceania/9.jpg",
      },
      {
        id: 50,
        nombre: "Oceania 10",
        descripcion:
          "Oceania 10 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/oceania/10.jpg",
      },
    ],
    antartida: [
      {
        id: 51,
        nombre: "Antártida 1",
        descripcion:
          "Antártida 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/antartida/1.jpg",
      },
      {
        id: 52,
        nombre: "Antártida 2",
        descripcion:
          "Antártida 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/antartida/2.jpg",
      },
      {
        id: 53,
        nombre: "Antártida 3",
        descripcion:
          "Antártida 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/antartida/3.jpg",
      },
      {
        id: 54,
        nombre: "Antártida 4",
        descripcion:
          "Antártida 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/antartida/4.jpg",
      },
      {
        id: 55,
        nombre: "Antártida 5",
        descripcion:
          "Antártida 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/antartida/5.jpg",
      },
      {
        id: 56,
        nombre: "Antártida 6",
        descripcion:
          "Antártida 6 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/antartida/6.jpg",
      },
      {
        id: 57,
        nombre: "Antártida 7",
        descripcion:
          "Antártida 7 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/antartida/7.jpg",
      },
      {
        id: 58,
        nombre: "Antártida 8",
        descripcion:
          "Antártida 8 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/antartida/8.jpg",
      },
      {
        id: 59,
        nombre: "Antártida 9",
        descripcion:
          "Antártida 9 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        ruta: "./img/antartida/9.jpg",
      },
    ],
  },
};

//Importamos el archivo de fotos
//const fotos = data.fotos;
const { fotos } = data;

var dataCategorias = {
  categorias: [
    {
      id: "america",
      nombre: "America",
      numeroFotos: fotos.america.length,
      imagenPortada: "./img/america.jpg",
    },
    {
      id: "europa",
      nombre: "Europa",
      numeroFotos: fotos.europa.length,
      imagenPortada: "./img/europa.jpg",
    },
    {
      id: "africa",
      nombre: "Africa",
      numeroFotos: fotos.africa.length,
      imagenPortada: "./img/africa.jpg",
    },
    {
      id: "antartida",
      nombre: "Antartida",
      numeroFotos: fotos.antartida.length,
      imagenPortada: "./img/antartida.jpg",
    },
    {
      id: "asia",
      nombre: "Asia",
      numeroFotos: fotos.asia.length,
      imagenPortada: "./img/asia.jpg",
    },
    {
      id: "oceania",
      nombre: "Oceania",
      numeroFotos: fotos.oceania.length,
      imagenPortada: "./img/oceania.jpg",
    },
  ],
};

//Extraemos las categorias de dataCategorias
const { categorias } = dataCategorias;
//Acceso a categorias
const contenedorCategorias$1 = document.getElementById("categorias");

//Creamos los demas de categorias
categorias.forEach((categoria) => {
  //Creacion de un elementos usando DOM
  const nuevaCategoria = document.createElement("a");
  //Debemos de colocar lo que va adentro de esta etiqueta
  //Primero pondremos una platilla
  const plantilla = `<img class="categoria__img" src="${categoria.imagenPortada}" alt="" />
            <div class="categoria__datos">
              <p class="categoria__nombre">${categoria.nombre}</p>
              <p class="categoria__numero-fotos">${categoria.numeroFotos} Fotos</p>
            </div>`;

  //Ahora tenemos el elemento
  nuevaCategoria.innerHTML = plantilla;

  //Creacion Elemento
  nuevaCategoria.classList.add("categoria");
  nuevaCategoria.href = "#";
  nuevaCategoria.dataset.categoria = categoria.id;

  //Agregamos al dom
  contenedorCategorias$1.append(nuevaCategoria);
});

const galeria$5 = document.getElementById("galeria");
//Funcion para poder cerrar la galeria

const cerrarGaleria = () => {
  galeria$5.classList.remove("galeria--active");

  //Colocamos el scroll
  document.body.style.overflow = "";
};

//Importar las fotos desde de fotos
const galeria$4 = document.getElementById("galeria");
const cargarImagen = (id, nombre, ruta, descripcion) => {
  galeria$4.querySelector(".galeria__imagen").src = ruta;
  galeria$4.querySelector(".galeria__imagen").dataset.idImagen = id;
  galeria$4.querySelector(".galeria__titulo").innerText = nombre;
  galeria$4.querySelector(".galeria__descripcion-imagen-activa").innerText =
    descripcion;

  // Para esto necesitamos 3 elementos
  const categoriaActual = galeria$4.dataset.categoria;
  //Accedemos a las fotos categoria actual
  const fotos = data.fotos[categoriaActual];

  //Seleccionamos el mismo id de la categoria

  //Guardamos el Index para despues poder usarlo
  let indexImagenActual;
  fotos.forEach((foto, index) => {
    if (foto.id === id) {
      indexImagenActual = index;
    }
  });

  //Ahora debemos de seleccionar el caourusel

  //Preguntamos la primera vez que, ya que esto no esta definido para esto la slides deben de ser mayores a 0
  if (galeria$4.querySelectorAll(".galeria__carousel-slide").length > 0) {
    // Borramos clase
    galeria$4
      .querySelector(".galeria__carousel-slide--active")
      .classList.remove("galeria__carousel-slide--active");

    // Ahora asignamos el método
    galeria$4
      .querySelectorAll(".galeria__carousel-slide")
      [indexImagenActual].classList.add("galeria__carousel-slide--active");
  }
};

//Funcion para cargar imagen anterior/siguiente

const cargarAnteriorSiguiente = (direccion) => {
  //Debemos de extrear los datos para poder continuar con la siguiete imagen
  const categoriaActual = galeria$4.dataset.categoria;
  const fotos = data.fotos[categoriaActual];

  //Necesitamos los datos especificos de la imagen actual y debemos de pasarlo a Int
  const idImagenActual = parseInt(
    galeria$4.querySelector(".galeria__imagen").dataset.idImagen
  );

  //Ahora con un forEach obtenemos el index

  let indexImagenActual;
  fotos.forEach((foto, index) => {
    if (foto.id === idImagenActual) {
      indexImagenActual = index;
    }
  });

  //Creamos una funcion para poder cargar la siguiente
  if (direccion === "siguiente") {
    //Primero nos debemos asegurar que exista
    if (fotos[indexImagenActual + 1]) {
      const { id, nombre, ruta, descripcion } = fotos[indexImagenActual + 1];
      cargarImagen(id, nombre, ruta, descripcion);
    }
  } else if (direccion === "anterior") {
    if (fotos[indexImagenActual - 1]) {
      const { id, nombre, ruta, descripcion } = fotos[indexImagenActual - 1];
      cargarImagen(id, nombre, ruta, descripcion);
    }
  }
};

//Importamos las fotos
//Tenemos que acceder al contenedor
const contenedorCategorias = document.getElementById("categorias");
//Extraemos galeria
const galeria$3 = document.getElementById("galeria");

//Añadimos un evento para que este se pueda propagar y solo ocupar un evento

contenedorCategorias.addEventListener("click", (e) => {
  //Colocamos esto para que no tenga las configuraciones previas
  e.preventDefault();

  if (e.target.closest("a")) {
    galeria$3.classList.add("galeria--active");
    //Ocultamos la barra lateral
    document.body.style.overflow = "hidden";

    //Cargamos la imagen activa, dentro de los argumentos pasamos la imagen que necesitamos
    //Cargamos las imagnes de forma dinamica, para esto debemos acceder solo a las de la categoria activa
    const categoriaActiva = e.target.closest("a").dataset.categoria;
    //Accedemos al valor de categoria para de esta manera poder buscar la foto
    galeria$3.dataset.categoria = categoriaActiva;
    //Accedemos a las fotos
    const fotos = data.fotos[categoriaActiva];

    //Antes de acceder debemos eliminar la slides
    const clear = galeria$3.querySelector(".galeria__carousel-slides");

    //Colocamos los atributos para de esta manera poder colocar las imagenes de la funcion
    const { id, nombre, ruta, descripcion } = fotos[0];
    cargarImagen(id, nombre, ruta, descripcion);
    clear.innerHTML = "";

    //Para cada foto debemos de cargarla
    fotos.forEach((foto) => {
      const slide = `<a href="#" class="galeria__carousel-slide">
                  <img
                    class="galeria__carousel-image"
                    //Colocamos la ruta para la foto y le agregamos un data id 
                    src="${foto.ruta}" data-id="${foto.id}"
                    alt=""
                  />
                </a>`;
      galeria$3.querySelector(".galeria__carousel-slides").innerHTML += slide;
    });
    //Remarcamos con un borde blanco la imagen que se esta usando
    galeria$3
      .querySelector(".galeria__carousel-slide")
      .classList.add("galeria__carousel-slide--active");
  }
});

const galeria$2 = document.getElementById("galeria");

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
    const slides = galeria$2.querySelectorAll(".galeria__carousel-slide");

    slides.forEach((slide) => {
      // observamos la slide
      observador.unobserve(slide);
    });
  }, opciones);

  //Obtenemos todos los slides
  const slides = galeria$2.querySelectorAll(".galeria__carousel-slide");

  slides.forEach((slide) => {
    // observamos la slide
    observador.observe(slide);
  });
};

const galeria$1 = document.getElementById("galeria");

const slideClick = (e) => {
  //Obtenemos el id
  let nombre;
  let descripcion;
  let ruta;

  const id = parseInt(e.target.dataset.id);
  const categoriaActiva = galeria$1.dataset.categoria;
  //Varibles para elementos de la base de datos

  //Extraemos los datos
  data.fotos[categoriaActiva].forEach((foto) => {
    //Colocamos la sentencia para que nos devuelva solo esos elementos
    if (foto.id === id) {
      ruta = foto.ruta;
      nombre = foto.nombre;
      descripcion = foto.descripcion;
    }
  });
  //Llamamos a al funcion y obtenemos los valores
  cargarImagen(id, nombre, ruta, descripcion);
};

//Usaremos propagacion de eventos para que de esta manera detecte que es lo que esta realizando


const galeria = document.getElementById("galeria");

galeria.addEventListener("click", (e) => {
  //Debemos de encontar la etiqueta mas cercana al objeto que estemos buscando
  const boton = e.target.closest("button");

  //Asegurarnos que solo devuelva en caso de que sea un boton
  //--- BOTON DE CERRAR GALERIA
  if (boton?.dataset?.accion === "cerrar-galeria") {
    cerrarGaleria();
  }

  //Para el carousel slide click
  //VER EL CONTENIDO
  if (e.target.dataset.id) {
    slideClick(e);
  }

  //PARA LA SIGUIENTE IMAGEN
  if (boton?.dataset?.accion === "siguiente-imagen") {
    cargarAnteriorSiguiente("siguiente");
  }

  //PARA LA ANTERIOR IMAGEN
  if (boton?.dataset?.accion === "anterior-imagen") {
    cargarAnteriorSiguiente("anterior");
  }

  //Boton de SCROLL

  //SCROLL ADELANTE
  if (boton?.dataset?.accion === "siguiente-slide") {
    caourusel("adelante");
  }

  //SCROLL ATRAS

  if (boton?.dataset?.accion === "anterior-slide") {
    caourusel("atras");
  }
});
