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
	velocidad: 50
	
};

var liz = {
	x: 400,
	y: 200,
	lizURL: "liz.png",
	lizOK: false,
	velocidad:50
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

	var botonAr = document.getElementById("botonAr");
	botonAr.addEventListener("click", moverBotonAr);

	var botonAb = document.getElementById("botonAb");
	botonAb.addEventListener("click", moverBotonAb);

	var botonI = document.getElementById("botonI");
	botonI.addEventListener("click", moverBotonI);

	var botonD = document.getElementById("botonD");
	botonD.addEventListener("click", moverBotonD);
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
		if(tifis.x > 0){
			tifis.x -= tifis.velocidad;
		}
		

	}

	if(codigoTecla == teclas.RIGHT){
		if(tifis.x < 450){
			tifis.x += tifis.velocidad;
		}
		

	}


	direccion = codigoTecla;
	dibujarAll();

}

function moverBotonAr(dir){
	//alert("Por teclado arriba");
	if(tifis.y > 0){
			tifis.y -= tifis.velocidad;
	}

	direccion = teclas.UP;
	dibujarAll();
}

function moverBotonAb(dir){
	//alert("Por teclado Abajo");
	if(tifis.y < 450){
			tifis.y += tifis.velocidad;
	}

	direccion = teclas.DOWN;
	dibujarAll();
}

function moverBotonI(dir){
	//alert("Por teclado izq");
	if(tifis.x >= 0){
			tifis.x -= tifis.velocidad;
	}

	direccion = teclas.LEFT;
	dibujarAll();
}

function moverBotonD(dir){
	//alert("Por teclado Derecha");
	if(tifis.x <= 450){
			tifis.x += tifis.velocidad;
	}

	direccion = teclas.RIGHT;
	dibujarAll();
}

function moberLiz(){
	var mX;
	mX = Math.floor( Math.random() *  (1 - 0 + 1) + 0); // para que me de entre 1 o 0
	//console.log(mX);
	if (mX == 1 && liz.x <= 450){
		liz.x += liz.velocidad;
	}
	if (mX == 0 && liz.x >= 0){
		liz.x -= liz.velocidad;
	}
	//console.log(liz.x);

	mX = Math.floor( Math.random() *  (1 - 0 + 1) + 0);
	//console.log(mX);
	if (mX == 1 && liz.y < 450){
		liz.y += liz.velocidad;
	}
	if (mX == 0 && liz.y > 0){
		liz.y -= liz.velocidad;
	}

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
		moberLiz();		
		tablero.drawImage(liz.imagen, liz.x, liz.y);
	}
	
}

function moverFrente(){
	tifis.x += 10;
	dibujarAll();
}

