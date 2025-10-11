       let nombreConjuntos = ["U"];
        let elementoConjuntos = [[]];

        function cambiarDiv(divOcultar, divMostrar) {
            document.getElementById(divOcultar).style.display = "none";
            document.getElementById(divMostrar).style.display = "block";
            if (divOcultar == "divUniverso"){
                document.getElementById("div_men_principal").style.display = "block";
            }
        }



        //revisar esta funcion
        function eliminarelemento(nombre, txtelemento) {
            elemento = document.getElementById(txtelemento).value;//trae el valor del elemento

            if (nombre == "U") { //el conjunto donde se va a eliminar es el Univeros
                alert("No se puede eliminar elementos del conjunto Universo");
            } else { // el nombre del conjunto no es 'U'
                indiceConjunto = nombreConjuntos.indexOf(nombre); //obtener el indice del nombre
                indiceElemento = elementoConjuntos[indiceConjunto].indexOf(elemento); //obtener el indice del elemento
                if (indiceElemento != -1) { //el elemento existe en el conjunto
                    elementoConjuntos[indiceConjunto].splice(indiceElemento, 1); //eliminar el elemento
                    alert("El elemento ${elemento} ha sido eliminado del conjunto ${nombre}");
                } else {
                    alert("El elemento ${elemento} no existe en el conjunto ${nombre}");
                }
            }
            document.getElementById(txtelemento).value = "";
            document.getElementById(txtelemento).focus();

        }

        function añadirElementos(nombre, txtelemento) {
            elemento = document.getElementById(txtelemento).value;//trae el valor del elemento

            

            if (elementoConjuntos[0].includes(elemento)) { //el elemento esta incluido en el Universo?
                //si
                if (nombre == "U") { //el elemento se quiere añadir en el conjunto universo
                    //si
                    alert("este elemento ya existe en el conjunto universo");
                }else { // el nombre del conjunto no es 'U'
                //A esta parte unicamente deberia ser posible llegar desde el menu de creacion de conjuntos
                //despues de crear el conjunto, o bien desde la opcion agregar elemento teniendo en cuenta
                //que se ha seleccionado un nombre de conjunto valido
                    indiceConjunto = nombreConjuntos.indexOf(nombre); //obtener el indice del nombre
                    
                    if (elementoConjuntos[indiceConjunto]<10){
                        elementoConjuntos[indiceConjunto].push(elemento); //agregar elemento al conjunto
                    }else{
                        alert("EL CONJUNTO ${nombre} ya tiene 10 elementos")
                    }
                     

                }

            } else { // el elemento no existe en el conjunto universo
                if (nombre == "U") { // el conjunto donde se va a agregar es el Univeros
                    if (elementoConjuntos[0].length < 10) { //el conjunto universo tiene menos de 10 elementos
                        elementoConjuntos[0].push(elemento);
                        document.getElementById("conjuntoUcr").innerText = "Conjunto Universo: {" + elementoConjuntos[0] + "}";
                    } else {
                        //el conjunto universo ya tiene mas de 10 elementos
                        alert("El conjunto Unvierso ya tiene 10 elementos, no puede agregar mas elementos");
                    }

                }else{
                    //el conjunto no esta en el universo y se quiere agregar a otro conjunto
                    alert("Este elemento no pertenece al conjunto Universo")
                }

            }
            document.getElementById(txtelemento).value = "";
            document.getElementById(txtelemento).focus();

        }

        function mostrarvalor(origen) {
            a = origen.innerText;
            document.getElementById("mostrar").innerText = a;
            alert(a);
        }
