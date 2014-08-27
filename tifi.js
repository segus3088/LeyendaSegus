var tablero, direccion;
var fondo = {
	imagenURL: "fondo.png",
	imagenOK: false
};

var tifis = {
	x: 100,
	y: 100,
	frenteURL: "diana-frente.png",
	frenteOK: false,
	backURL: "diana-atras.png",
	backOK: false,
	izqURL: "diana-izq.png",
	izqOK: false,
	derURL: "diana-der.png",
	derOK: false,
	velocidad: 10
	
};

var liz = {
	x: 400,
	y: 200,
	lizURL: "liz.png",
	lizOK: false
}

var teclas = {
	UP: 38,
	DOWN: 40,
	LEFT: 37,
	RIGHT: 39
}

function inicio(){
	var canvas = document.getElementById("campo");
	tablero = canvas.getContext("2d");

	fondo.imagen = new Image(); // es lo mismo que la tag <img >
	fondo.imagen.src = fondo.imagenURL;
	//fondo.imagen.onload = dibujarAll; // sin () para que cuando cargue la imagen la dibuje y de igual manera con () no funciona  
	fondo.imagen.onload = confirmarFondo;

	tifis.frente = new Image();
	tifis.frente.src = tifis.frenteURL;
	tifis.frente.onload = confirmarTifisF;

	tifis.back = new Image();
	tifis.back.src = tifis.backURL;
	tifis.back.onload = confirmarTifisB;

	tifis.izq = new Image();
	tifis.izq.src = tifis.izqURL;
	tifis.izq.onload = confirmarTifisI;

	tifis.der = new Image();
	tifis.der.src = tifis.derURL;
	tifis.der.onload = confirmarTifisD;

	liz.imagen = new Image();
	liz.imagen.src = liz.lizURL;
	liz.imagen.onload = confirmarLiz;

	document.addEventListener("keydown", teclado);
	//Esto es para cuando se toma por botones 
	//var m = document.getElementById("mover");
	//m.addEventListener("click", moverFrente); //aquí es donde se mueve y se invoca el boton 

}

function confirmarFondo(){
	fondo.imagenOK = true;
	dibujarAll();

}

function confirmarTifisF(){
	tifis.frenteOK = true
	dibujarAll();

}

function confirmarTifisB(){
	tifis.backOK = true
	dibujarAll();

}

function confirmarTifisI(){
	tifis.izqOK = true
	dibujarAll();

}

function confirmarTifisD(){
	tifis.derOK = true
	dibujarAll();

}

function confirmarLiz(){
	liz.lizOK = true;
	dibujarAll();

}

function teclado(datos){	
	//console.log(datos); // con esto se que tecla es que estoy oprimiendo sierve para ver que pasa con el teclado
	var codigoTecla = datos.keyCode;

	if(codigoTecla == teclas.UP){
		if(tifis.y > 0){
			tifis.y -= tifis.velocidad;
		}
				
	}

	if(codigoTecla == teclas.DOWN){
		if(tifis.y < 450){
			tifis.y += tifis.velocidad;
		}
		
	}

	if(codigoTecla == teclas.LEFT){
		if(tifis.x >= 0){
			tifis.x -= tifis.velocidad;
		}
		

	}

	if(codigoTecla == teclas.RIGHT){
		if(tifis.x <= 450){
			tifis.x += tifis.velocidad;
		}
		

	}


	direccion = codigoTecla;
	dibujarAll();

}


function dibujarAll(){

	//capa 1
	if (fondo.imagenOK == true){
		tablero.drawImage(fondo.imagen, 0, 0); //es lo que me dibuja las imagenes 0, 0 es donde se comineza a dibujar x, y del lienzo
	}

	//capa 2
	var tifisDibujo = tifis.frente;
	if (tifis.frenteOK && tifis.backOK && tifis.izqOK && tifis.derOK) {
		//tablero.drawImage(tifis.frente, tifis.x, tifis.y);
		if(direccion == teclas.UP){
			tifisDibujo = tifis.back; // con esto modifico las imagenes
		}

		if(direccion == teclas.DOWN){
			tifisDibujo = tifis.frente;
		}

		if(direccion == teclas.LEFT){
			tifisDibujo = tifis.izq;
		}

		if(direccion == teclas.RIGHT){
			tifisDibujo = tifis.der;
		}

		tablero.drawImage(tifisDibujo, tifis.x, tifis.y);
	}

	//capa 3	
	if (liz.lizOK){
		tablero.drawImage(liz.imagen, liz.x, liz.y);
	}
	
}

function moverFrente(){
	tifis.x += 10;
	dibujarAll();
}

