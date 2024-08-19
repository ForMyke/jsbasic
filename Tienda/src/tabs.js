export default class Tabs {
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
