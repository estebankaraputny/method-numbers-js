// Method .parseInt()

// Convierte (parsea) un argumento de tipo cadena y devuelve un entero de la base especificada.

numberParsed = parseInt("233.22")

console.log(`Number parseado in int: ${numberParsed}`);


// Method parseFloat()

// analiza un argumento (si es necesario, lo convierte en una cadena)
// y devuelve un número de coma flotante.

let numberFloat = parseFloat("11.22")

console.log(`\n\nNumber parseado in float: ${numberFloat}`);


// Method Number()

// Convierte al numero identico (sea entero o decimal) 
// que contiene la cadena

let numberNormal = 3232

console.log(`\n\nEste numero es normal: ${Number(numberNormal)}`);


// Method isNaN()

// Devolvera false si es un numero valido o true si No es un numero valido.


console.log(`\n\nEsto es NaN: ${isNaN(21)}`)
console.log(`Esto es NaN: ${isNaN("Hola")}`)



// Method .toFixed()

// formatea un número usando notación de punto fijo.



function finaliza(x) {
    return Number.parseFloat(x).toFixed(2);
  }
  
console.log(`\n\nElimina los numeros fuera del rango que se indica en la funcion toFixed: ${finaliza(12.994554323)}`);


// Object Math

// Propiedades: .min(), .max(), .random(), .ceil(), .floor(), .round()

// .min():
console.log(`\n\nEl numero mas chico de estos numeros es: ${Math.min(3,564, 1, 667, 34)}`);

// .max():
console.log(`\n\nEl numero mas grande de estos numeros es: ${Math.max(45, 3423, 345, 78, 5464, 5463)}`);

// .random()
console.log(`\n\nNumero random de 0 a 1: ${Math.random()}`);

// .ceil()

let numeroDecimal = 234.545
console.log(`\n\nNumero redondeado hacia el siguiente numero: ${Math.ceil(numeroDecimal)}`);

// .floor()

console.log(`\n\nNumero redondeado hacia el anterior numero entero: ${Math.floor(numeroDecimal)}`);

// .round()

console.log(`\n\nNumero redondeado hacia el siguiente numero entero: ${Math.round(numeroDecimal)}`);