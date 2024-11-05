// Crear una web con un script en el que se declare un array que contenga los meses del año (['enero','febrero',...]). Utiliza este array y el objeto Date para escribir en la página la fecha actual, por ejemplo: "Estamos a 13 de noviembre de 2024, faltan ?? días fin de año". 


let meses = (['enero', 'febrero', 'marzo', 'abril', 'mayo','junio', 'julio', 'agosto','septiembre', 'octubre', 'noviembre','diciembre']); 

let hoy = new Date(); 

let dia = hoy.getUTCDate(); 

let mes = hoy.getMonth(); 

let anyo = hoy.getFullYear()

let mesLetra = meses[mes]; 

let nochevieja = new Date(2024, 11, 31); //los meses empiezan en cero

//establecemos los dos dias en 0 horas
nochevieja.setHours(0,0,0,0); 
hoy.setHours(0,0,0,0); 

let diferencia = nochevieja - hoy; 

let diasDiferencia = diferencia/(24*60*60*1000); 

let diasDiferenciaCeil= Math.ceil(diasDiferencia); 

 

document.write("Estamos a " + dia + " de " + mesLetra + " de " + anyo + ", faltan " + diasDiferenciaCeil + " días para fin de año"); 