var nombreConjuntos = ["U"];
var elementoConjuntos = [[]];
let actual = "divUniverso";

function terminarU() {
  if (elementoConjuntos[0].length === 0) {
    alert("El conjunto universo no puede estar vacio");
  } else {
    cambiarDiv("divCreacion");
    alert(elementoConjuntos[0]);
    alert(elementoConjuntos.length);
    alert(elementoConjuntos[0].length);
    alert(nombreConjuntos);
  }
}

function cambiarDiv(divMostrar) {
  if (actual != divMostrar) {
    document.getElementById(actual).style.display = "none";
    document.getElementById(divMostrar).style.display = "block";
    if (actual == "divUniverso") {
      document.getElementById("divMenuPrincipal").style.display = "block";
    }
  }
}

//revisar esta funcion
function eliminarelemento(nombre, txtelemento) {
  elemento = document.getElementById(txtelemento).value; //trae el valor del elemento

  if (nombre == "U") {
    //el conjunto donde se va a eliminar es el Univeros
    alert("No se puede eliminar elementos del conjunto Universo");
  } else {
    // el nombre del conjunto no es 'U'
    indiceConjunto = nombreConjuntos.indexOf(nombre); //obtener el indice del nombre
    indiceElemento = elementoConjuntos[indiceConjunto].indexOf(elemento); //obtener el indice del elemento
    if (indiceElemento != -1) {
      //el elemento existe en el conjunto
      elementoConjuntos[indiceConjunto].splice(indiceElemento, 1); //eliminar el elemento
      alert("El elemento ${elemento} ha sido eliminado del conjunto ${nombre}");
    } else {
      alert("El elemento ${elemento} no existe en el conjunto ${nombre}");
    }
  }
  document.getElementById(txtelemento).value = "";
  document.getElementById(txtelemento).focus();
}

function creaConjunto() {
  nombre = document.getElementById("txtNombreNuevoConjunto").value;
  msj = document.getElementById("msjCreacion");
  if (nombre === "") {
    msj.innerText = "EL NOMBRE NO DEBE DE ESTAR VACIO";
  } else {
    if (nombreConjuntos.includes(nombre)) {
      msj.innerText = "Este Conjunto ya existe";
    } else {
      nombreConjuntos.push(nombre.toUpperCase());
      msj.innerText = nombreConjuntos;
      msj.innerText = elementoConjuntos[0].length;
      selEle = document.getElementById("selElementos");
      selEle.disabled = false;
      selEle.innerHTML = "";

      elementoConjuntos[0].forEach((element) => {
        let op = new Option(element, element);

        selEle.add(op);
      });

      document.getElementById("btnGuardarNombre").disabled = true;
      document.getElementById("txtNombreNuevoConjunto").disabled = true;
    }
  }
}

function añadirElementos(nombre, txtelemento) {
  elemento = document.getElementById(txtelemento).value; //trae el valor del elemento

  if (nombre != "U") {
    nombre = document.getElementById(nombre).value;
  }
  alert(nombre);

  if (elemento != "") {
    if (elementoConjuntos[0].includes(elemento)) {
      //el elemento esta incluido en el Universo?
      //si

      if (nombre == "U") {
        //el elemento se quiere añadir en el conjunto universo
        //si

        alert("este elemento ya existe en el conjunto universo");
        msj = document.getElementById("msjCreacionU");
        msj.innerText = "este elemento ya existe en el conjunto universo";
      } else {
        // el nombre del conjunto no es 'U'
        //A esta parte unicamente deberia ser posible llegar desde el menu de creacion de conjuntos
        //despues de crear el conjunto, o bien desde la opcion agregar elemento teniendo en cuenta
        //que se ha seleccionado un nombre de conjunto valido
        indiceConjunto = nombreConjuntos.indexOf(nombre); //obtener el indice del nombre
        alert(indiceConjunto);

        if (elementoConjuntos[indiceConjunto] < 10) {
          elementoConjuntos[indiceConjunto].push(elemento); //agregar elemento al conjunto
          alert(elementoConjuntos[indiceConjunto]);
        } else {
          alert("EL CONJUNTO ${nombre} ya tiene 10 elementos");
        }
      }
    } else {
      // el elemento no existe en el conjunto universo
      if (nombre == "U") {
        // el conjunto donde se va a agregar es el Univeros
        if (elementoConjuntos[0].length < 10) {
          //el conjunto universo tiene menos de 10 elementos
          elementoConjuntos[0].push(elemento);
          document.getElementById("conjuntoUcr").innerText =
            "Conjunto Universo: {" + elementoConjuntos[0] + "}";
        } else {
          //el conjunto universo ya tiene mas de 10 elementos
          alert(
            "El conjunto Unvierso ya tiene 10 elementos, no puede agregar mas elementos"
          );

          cambiarDiv("divCreacion");
        }
      } else {
        //el conjunto no esta en el universo y se quiere agregar a otro conjunto
        alert("Este elemento no pertenece al conjunto Universo");
      }
    }
    document.getElementById(txtelemento).value = "";
  } else {
    alert("Agregue un elemento valido");
  }
  document.getElementById(txtelemento).focus();
}

function mostrarvalor(origen) {
  a = origen.innerText;
  document.getElementById("mostrar").innerText = a;
  alert(a);
}
