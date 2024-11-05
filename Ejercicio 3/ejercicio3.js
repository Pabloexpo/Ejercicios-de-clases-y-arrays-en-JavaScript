// Implementa una función "cuenta atrás" a la que le pasemos 2 parámetros, un número y un carácter (S, M) que indica si el número introducido son segundos o minutos. Utilizando document.write la función escribirá en la página una cuenta atrás, siempre en segundos. Por ejemplo, una llamada a la función con un 2 y una 'M', escribirá en pantalla:

// Faltan 120 segundos

// (Trascurrido un segundo escribirá)...

// Faltan 119 segundos.

// Faltan 118 segundos.

//             ...

// Al llegar a 0, la cuenta atrás se para.


let patron = /^[s|m]{1}$/i;

let numero = prompt("Introduce un número");
let letra = prompt("Introduce un carácter");

function cuentaAtras(num, caracter) {
    if (isNaN(num) || num <= 0) {
        alert('No has introducido un número válido');
        return; // Salimos de la función
    }
    if (!patron.test(caracter)) {
        alert('No has introducido un carácter correcto');
        return; 
    }

    if (caracter.toLowerCase() === 'm') num = num *60; //pasamos minutos a segundos si estamos en m...si estamos en s, dejamos todo normal
    
    let parrafo = document.getElementById('parrafo'); 

    let mostrar = () => { //funcion que usaremos en la llamada al interval

        if (num>0){
            document.write("Faltan " + num + " segundos<br>"); 
            num --; 
        } else {
            document.write("Tiempo terminado"); 
            clearInterval(intervalo); 
        }
    }

    let intervalo = setInterval(mostrar, 1000);
}


cuentaAtras(numero, letra);

