console.log()

function crearCarrusel(listaDeImagenes) {
    const contenedorCarrusel = document.createElement("div");
    contenedorCarrusel.classList.add("contenedor-carrusel");
  
    const carrusel = document.createElement("div");
    carrusel.classList.add("carrusel");
    carrusel.style.width = listaDeImagenes.imagenes.length * 100 + "%";
  
    const listaDeSecciones = listaDeImagenes.imagenes.map(function (imagen) {
      const unaSeccion = document.createElement("div");
      unaSeccion.classList.add("carrusel_seccion");
      unaSeccion.classList.add("secciones-lista" + listaDeImagenes.id);
  
      const carruselImg = document.createElement("img");
      carruselImg.classList.add("carrusel_img");
      carruselImg.src = imagen;
  
      unaSeccion.appendChild(carruselImg);
      carrusel.appendChild(unaSeccion);
      return unaSeccion;
    });
  
    contenedorCarrusel.appendChild(carrusel);
  
    const flechaIzq = document.createElement("div");
    flechaIzq.textContent = "<";
    flechaIzq.classList.add("carrusel_boton");
    flechaIzq.classList.add("carrusel_botonizq");
  
    const flechaDer = document.createElement("div");
    flechaDer.textContent = ">";
    flechaDer.classList.add("carrusel_boton");
    flechaDer.classList.add("carrusel_botonder");
  
    contenedorCarrusel.appendChild(flechaDer);
    contenedorCarrusel.appendChild(flechaIzq);
  
    const body = document.querySelector("body");
    body.appendChild(contenedorCarrusel);
  
    const CarruselUltimaSeccion = listaDeSecciones[listaDeSecciones.length - 1];
    carrusel.insertAdjacentElement("afterbegin", CarruselUltimaSeccion);
  
    function Next() {
      let CarruselPrimeraSeccion = document.querySelectorAll(
        ".secciones-lista" + listaDeImagenes.id
      )[0];
      carrusel.style.marginLeft = "-200%";
      carrusel.style.transition = "all 0.5s";
      setTimeout(function () {
        carrusel.style.transition = "none";
        carrusel.insertAdjacentElement("beforeend", CarruselPrimeraSeccion);
        carrusel.style.marginLeft = "-100%";
      }, 500);
    }
  
    function Prev() {
      let carruselSeccion = document.querySelectorAll(
        ".secciones-lista" + listaDeImagenes.id
      );
      let CarruselUltimaSeccion = carruselSeccion[carruselSeccion.length - 1];
      carrusel.style.marginLeft = "0";
      carrusel.style.transition = "all 0.5s";
      setTimeout(function () {
        carrusel.style.transition = "none";
        carrusel.insertAdjacentElement("afterbegin", CarruselUltimaSeccion);
        carrusel.style.marginLeft = "-100%";
      }, 500);
    }
  
    flechaIzq.addEventListener("click", function () {
      Prev();
    });
  
    flechaDer.addEventListener("click", function () {
      Next();
    });

 }
  
  const listaDeFotos = {
    id: 1,
    imagenes: [
      src="/images/Carrusel_images/Brilla.png",
      src="/images/Carrusel_images/Libelula.png",
      src="/images/Carrusel_images/Selenofilia.png",
      src="/images/Carrusel_images/Plata 950.png",
    ],
  };
  
  crearCarrusel(listaDeFotos);

