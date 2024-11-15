// Crear una web con un script que obtenga una lista de palabras tecleadas por el usuario y los almacene en un array hasta que el usuario introduzca la palabra FIN. Validaremos utilizando una expresión regular que las palabras introducidas comiencen por mayúscula y tengan al menos 5 caracteres, informando del error en caso contrario. Escribe en la página la siguiente información:

// a.   La primera palabra introducida por el usuario.

// b.   La última palabra introducida por el usuario.

// c.   La palabra de mayor longitud introducida por el usuario.

// d.   La media aritmética de las longitudes de la palabras, redondeada al entero menor..

let boton = document.getElementById('boton');
let array = new Array();
let patron = /^[A-Z][a-zA-Z]{4}/
let longitud=0;

function encontrarMayor(arrayParam){ 
    let maxima=''; 
    let palabra=''; 
    for (let i=0; i<arrayParam.length; i++){
        palabra = arrayParam[i]; 
        if (palabra.length>maxima.length){
            maxima=palabra;
        }
    }
    return maxima;
}
boton.addEventListener('click', () => {
    let input = document.getElementById('palabra');
    let palabra = input.value;
    let palMaxima = encontrarMayor(array);
    if (palabra === "FIN") {
        document.write("La primera palabra introducida ha sido: " + array[0]);
        document.write("<br>La última palabra introducida ha sido: " + array[array.length-1]);
        document.write("<br>La palabra de mayor longitud ha sido: " + palMaxima);
        document.write("<br>La media de las longitudes ha sido: " + Math.ceil(longitud/array.length));        
        return
    }
    if (patron.test(palabra)) {
        longitud = longitud + palabra.length; 
        array.push(palabra);
        input.value = ''; 

    } else {
        alert('Has introducido una expresión no acorde a lo pedido');
    }
})