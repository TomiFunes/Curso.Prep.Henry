// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "hola";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 15;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  return "str"
  
}

function suma(x, y) {
	return x + y
  
}

function resta(x, y) {
	return x - y
}

function multiplica(x, y) {
	return x * y
  }

function divide(x, y) {
	return x / y
}

function sonIguales(x, y) {
	if (x==y) {
		return true;
	}
	return false
}

function tienenMismaLongitud(str1, str2) {
	if (str1 == str2) {
		return "true";
	}
	else{
	return "false";
    }
}

function menosQueNoventa(num) {
	if (num<90){
		return true;
	}
	return false
}

function mayorQueCincuenta(num) {
	if (num>50){
		return true;
	}
	return false
 }

function obtenerResto(x, y) {
	return x / y
}
 

function esPar(num) {
	if (num %2 == 0) {
		return "true";
	}
	else {
		return "false";
	}
}

function esImpar(num) {
	if (num %2 == 1) {
		return "true";
	}
	else {
		return "false"
	}
}

	
	

function elevarAlCuadrado(num) {
	return num ** 2
}

  
function elevarAlCubo(num) { 
	return num ** 3
}

function elevar(num, exponent) {
	return num ** exponent 
}

function redondearNumero(num) {
	return Math.round(num)
}

function redondearHaciaArriba(num) {
	return Math.ceil(num)
}

function numeroRandom(num) {
	return Math.random (num)
}

function esPositivo(numero) {
	if (numero>0) {
		return "Es Positivo";
	}
	if (numero<0) {
		return "Es negativo"
	}
	if (numero==0) {
		return "false"
	}
}

function agregarSimboloExclamacion(str) {
	return str + !
}

function combinarNombres(nombre, apellido) {
	return (nombre + " " + apellido)
}

function obtenerSaludo(nombre) { 
	return("hola" + "nombre" + "!")
}

function obtenerAreaRectangulo(alto, ancho) {
	return alto * ancho
}
  
function retornarPerimetro(lado){
	return lado + lado + lado +lado 
}
  

function areaDelTriangulo(base, altura){
	return ( base * altura) / 2
}


function deEuroAdolar(euro){
	return (euro * 1.20)
}

function esVocal(letra) {
	if (letra=="a") {
		return "es vocal"
	}
	if (letra=="e") {
		return"es vocal"
	}
	if (letra=="i") {
		return "es vocal"
	}
	if (letra=="o"){
		return "es vocal"
	}
	if (letra=="u") {
	}
    else {
		return "Dato incorrecto"
	}
}

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
