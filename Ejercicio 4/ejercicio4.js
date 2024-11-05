class Curso {
    constructor(nombre) {
        this.nombre = nombre;
        this.alumnos = new Array();
        this.maximo = 10;
    }

    modificarMaximo() {
        let max = prompt("¿Cuál es el nuevo máximo de alumnos?");
        this.maximo = max;
    }
    agregarAlumnos(nombreAlumno) {
        if (this.alumnos.length >= this.maximo) {
            alert("Máximo de alumnos alcanzado");
            return;
        }

        //verificación del nombre
        for (let i = 0; i < this.alumnos.length; i++) {
            if (this.alumnos[i].nombre === nombreAlumno) {
                alert('Ya has incluido ese nombre!');
                return;
            }
        }

        let nuevoAlumno = {
            nombre: nombreAlumno,
            nota: null
        }; //objeto literal para incluirlo


        if (this.alumnos.includes(nuevoAlumno)) {
            alert('Ya has incluido ese nombre');
        } else {

            this.alumnos.push(nuevoAlumno);

        }
    }
    agregarNota(nombreAlumno, nota) {
        if (nota<0 || nota>10){
            alert('El valor introducido no está entre los estándares de una nota'); 
            return;
        }
        if (nombreAlumno) {
            for (let i = 0; i < this.alumnos.length; i++) {
                if (this.alumnos[i].nombre === nombreAlumno) {
                    this.alumnos[i].nota = nota;
                    return;
                }
            }
        } else {
            alert('Alumno no encontrado!');
        }

    }

    listar() {
        this.alumnos.forEach(alumno => {
            document.write("Nombre: " + alumno.nombre + ", nota: " + alumno.nota + "<br>");
        });
    }
    eliminarAlumno(nombreAlumno) {
        if (nombreAlumno) {
            for (let i = 0; i < this.alumnos.length; i++) {
                if (this.alumnos[i].nombre === nombreAlumno) {
                    this.alumnos.splice(i, 1);
                    alert(`Alumno ${nombreAlumno} eliminado`)
                }
            }
        } else {
            alert('Alumno no encontrado!'); 
        }

    }
    mostrarEstadisticas(){
        let media;
        let suma=0;
        let total=0; 
        let maxima =0; 
        let nomMaxima; 

        //búsqueda de la media y del máximo
        for (let i=0; i<this.alumnos.length; i++){
            if (typeof this.alumnos[i].nota==='number' && this.alumnos[i].nota!==null){
                suma += this.alumnos[i].nota;
                total++; 
                if(i==0){
                    maxima= this.alumnos[0].nota; 
                    nomMaxima=this.alumnos[0].nombre; 
                } else {
                    if (this.alumnos[i].nota> maxima){
                        maxima= this.alumnos[i].nota; 
                        nomMaxima= this.alumnos[i].nombre; 
                    }
                }
            }
             
        }
        media = suma / this.alumnos.length; 

        document.write(`La media de los alumnos ha sido ${media} <br>`); 
        document.write(`La nota máxima de los alumnos ha sido ${maxima}, obtenida por ${nomMaxima} <br>`); 
    }
}



let c1 = new Curso("DAW"); //objeto
//cogemos el boton, el alumno, la nota y agregamos
//AGREGAR ALUMNO
let boton = document.getElementById('agregar');
boton.addEventListener('click', () => {

    let input = document.getElementById('alumno');
    let alumno = input.value;
    input.value = '';

    c1.agregarAlumnos(alumno); //lamada al método con el objeto

});

//AGREGAR NOTA
let botonNota = document.getElementById('addNota');
botonNota.addEventListener('click', () => {
    input = document.getElementById('nota');
    let nota = parseInt(input.value);
    input.value = '';

    input = document.getElementById('alumnoNota');
    let alumnoNota = input.value;
    input.value = '';

    c1.agregarNota(alumnoNota, nota);

})
//MOSTRAR ALUMNOS
let mostrar = document.getElementById('mostrar');
mostrar.addEventListener('click', () => {
    c1.listar();
    document.write('<button id="volver">Volver hacia atrás</button>');
    document.getElementById("volver").addEventListener('click', () => {
        window.location.reload();
    });
});

//ELIMINAR ALUMNOS
let botEliminar = document.getElementById('botonEliminar');
botEliminar.addEventListener('click', () => {
    let alumEliminado = document.getElementById('nombreEliminar').value;
    c1.eliminarAlumno(alumEliminado);
})

//MODIFICAR MÁXIMO
document.getElementById('modificar').addEventListener('click', () => c1.modificarMaximo()); 

//MUESTRA DE ESTADÍSTICAS
let botonEstad = document.getElementById('estad'); 
botonEstad.addEventListener('click', ()=>{
    c1.mostrarEstadisticas(); 
    document.write('<br><button id="volver">Volver hacia atrás</button>');
    document.getElementById("volver").addEventListener('click', () => {
        window.location.reload();
    });
}); 