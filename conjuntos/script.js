let conjuntoUniverso = []; //creacion del conjunto universo
let subConjuntos = []; //Subconjuntos que habra

//Esta funcion ocultara el primer id y mostrara el segundo
function ocultar(ocultarId, mostrarId) {
  document.getElementById(ocultarId).style.display = "none";
  document.getElementById(mostrarId).style.display = "block";
}

//Agregara elementos al conjunto universo
function agregarElemento() {
  let elemento = document.getElementById("ingresoElemento").value;
  //Verifica si en input no este vacio, si lo esta no agrega nada
  //Para que no se ingreses elementos vacios
  const comprobar = (valor, lista) => lista.includes(valor);
  if (elemento !== "" && comprobar(elemento, conjuntoUniverso) == false) {
    conjuntoUniverso.push(elemento);
    document.getElementById("mostrarElementos").innerText = "{" + conjuntoUniverso + "}";
  } else {
    window.alert("Entrada vacía");
  }

  document.getElementById("ingresoElemento").value = "";
}

//valida si se han ingresado los datos necesarios para pasar a la siguiente parte
function validacionCampos() {
  let cantidad = parseInt(document.getElementById("cantidadConjuntos").value);
  let elementos = conjuntoUniverso.length;

  if (isNaN(elementos) || elementos < 1) {
    document.getElementById("btnCrear").disabled = true;
  } else {
    if (isNaN(cantidad) || cantidad < 1) {
      document.getElementById("btnCrear").disabled = true;
    } else {
      document.getElementById("btnCrear").disabled = false;
    }
  }
}

function crearConjuntos() {
  let texto = "";
  let cantidad = parseInt(document.getElementById("cantidadConjuntos").value);
  ocultar("creacionConjuntos", "asignarElementos");
  subConjuntos.length = 0;

  for (let i = 0; i < cantidad; i++) {
    subConjuntos.push([]);
  }

  document.getElementById("Conjuntos").innerText =
    subConjuntos + " cantidad: " + subConjuntos.length;
}

function regresar() {
  ocultar("asignarElementos", "creacionConjuntos");
}
