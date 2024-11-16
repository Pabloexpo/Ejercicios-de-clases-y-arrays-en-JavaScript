window.onload = () => { //Cargamos el script desde el head
    class Curso {
        constructor(nombre) { //CONSTRUCTOR
            this.nombre = nombre;
            this.alumnos = [];
            this.maximo = 10;
        }
        modMax(nuevoMaximo) {
            let antiguo = this.maximo;
            this.maximo = nuevoMaximo;
            alert(`Has modificado el máximo de alumnos de ${antiguo} a ${nuevoMaximo}`)
        }

        agregarAlumnos(nombreAlumno) {
            let alumno = { //DATOS DEL ALUMNO, OBJETO LITERAL
                nombre: nombreAlumno,
                nota: null
            }
            let patron=/[a-z]{1,}/i; //verificamos que solo tenga letras
            if (!patron.test(nombre)){
                alert('Has introducido algo que no tiene letras, no es un nombre'); 
                return; 
            }


            if (this.alumnos.length >= this.maximo) {
                alert('Máximo de alumnos alcanzado'); //COMPARACIÓN DE MÁXIMOS
                return; //SALIDA DEL PROGRAMA
            }
            for (let alumno of this.alumnos) {
                if (alumno.nombre === nombreAlumno) { //BÚSQUEDA DEL NOMBBRE
                    alert("Ya has incluido ese nombre");
                    return; //SALIDA DEL PROGRAMA
                }
            }
            this.alumnos.push(alumno);
            alert('Nombre ingresado correctamente');
        }

        agregarNota(nota, nombreAlumno) {
            if ((nota < 0 || nota > 10) || isNaN(nota)) {
                alert('El valor introducido no está entre los estándares de una nota');
                return;
            }

            for (let alumno of this.alumnos) {
                if (alumno.nombre === nombreAlumno) {
                    alumno.nota = nota;
                    alert("Nota ingresada satisfactoriamente");
                    return;
                }
            }
            //Si el alumno buscado no está, devolvemos un null y hacemos un alert
            let busqueda = this.alumnos.find((elemento) => elemento == nombreAlumno);
            if (busqueda == null) alert('Ese nombre no ha sido incluido');
        }

        listarAlumnos() {
            let main = document.getElementsByTagName("main")[0]; //Cogemos el primer elemento main
            let parrafo = document.createElement('p');  //Generamos un párrafo
            main.style.padding='1em';
            for (let alumno of this.alumnos) { //Bucle más eficiente
                parrafo.innerHTML+=`Alumno: ${alumno.nombre}, nota: ${alumno.nota} <br>`;
                main.appendChild(parrafo); 
            }

        }
        
        eliminarAlumno(nombreAlumno) {

            let busqueda = this.alumnos.find((elemento) => elemento == nombreAlumno);
            if (busqueda == null) {
                for (let alumno of this.alumnos) {
                    if (alumno.nombre === nombreAlumno) {
                        this.alumnos.splice(alumno.nombre);
                        alert("Alumno eliminado satisfactoriamente")
                    }
                }
            } else {
                alert('No podemos eliminar un alumno que no está en la lista');                
            }
        }

        mostrarEstadisticas() {
            let total = 0;
            let maxima = 0;
            let alumnoMaxima;
            let totalAlumnos = (this.alumnos.length);
            //OBTENCIÓN DE LA MEDIA
            for (let i = 0; i < this.alumnos.length; i++) {
                //convertimos las notas a números para que se pueda tratar bien con ellas
                total += parseInt(this.alumnos[i].nota);
                let notaAlumnoParse = parseFloat(this.alumnos[i].nota);
                if (i == 0) {
                    maxima = notaAlumnoParse;
                    alumnoMaxima= this.alumnos[i].nombre;
                }
                else if (i>0) {
                    if (notaAlumnoParse > maxima) { 
                        maxima = notaAlumnoParse;
                        alumnoMaxima = this.alumnos[i].nombre;
                    }
                }
            }
            let media = parseFloat((total / totalAlumnos)).toFixed(2); //Redondeamos dos decimales y lo convertimos en Float
            let main = document.getElementsByTagName("main")[0]; //Cogemos el primer elemento main
            let parrafo = document.createElement('p');  //Generamos un párrafo

            parrafo.innerHTML= `La nota media de los alumnos es ${media}<br> La nota máxima ha sido ${maxima}, perteneciente a ${alumnoMaxima}`; 
            main.style.padding='1em';
            main.appendChild(parrafo); 
        }

    }

    let c1 = new Curso('DAW');
    //VARIABLES QUE VAMOS A IR UTILIZANDO ALMACENANDO INPUTS POR PROMPT
    let nombre;
    let nota;
    let max;

    //AGREGAR ALUMNO
    document.getElementById('nombre').addEventListener('click', () => {
        nombre = prompt('Inserta un nombre para el alumno');
        c1.agregarAlumnos(nombre);
    })

    //AGREGAR NOTA
    document.getElementById('nota').addEventListener('click', () => {
        nombre = prompt('Ingresa el alumno al que le vas a poner la nota');
        nota = prompt('Ingresa la nota del alumno');
        c1.agregarNota(nota, nombre);
    })

    //ELIMINAR ALUMNO
    document.getElementById('eliminar').addEventListener('click', () => {
        nombre = prompt('Ingresa el alumno que quieres eliminar');
        c1.eliminarAlumno(nombre);
    })

    //listar alumnos
    document.getElementById('listar').addEventListener('click', () => {
        c1.listarAlumnos();
    })

    //MOSTRAMOS ESTADÍSTICAS
    document.getElementById('estad').addEventListener('click', () => {
        c1.mostrarEstadisticas();
    })

    //MODIFICAMOS EL MÁXIMO 
    document.getElementById('max').addEventListener('click', () => {
        max = prompt('Introduce el nuevo máximo de alumnos');
        c1.modMax(max);
    })

}

