var y = 10; // altura inicial y0=10%, debe leerse al iniciar si queremos que tenga alturas diferentes dependiendo del dispositivo
var v = 0;
var g = 1.622;
var a = g;
var dt = 0.016683;
var timer=null;
var timerFuel=null;
var fuel=100;

//al cargar por completo la página...
window.onload = function(){
	//definición de eventos
	//mostrar menú móvil
    	document.getElementById("div2").onclick = function () {
		document.getElementsByClassName("c")[0].style.display = "block";
		stop();
	}
	//ocultar menú móvil
		document.getElementById("div4").onclick = function () {
		document.getElementsByClassName("c")[0].style.display = "none";
		start();
	}
	//encender/apagar el motor al hacer click en la pantalla
	document.onload = function () {
 	  if (a==g){
  		motorOn();
 	  } else {
  		motorOff();
 	  }
	}
	//encender/apagar al apretar/soltar una tecla
	document.onkeydown = motorOn;
	document.onkeyup = motorOff;
	
	//Empezar a mover nave
	start();

}

//Definición de funciones
function start(){
	timer=setInterval(function(){ moverNave(); }, dt*1000);
}

function stop(){
	clearInterval(timer);
}

function moverNave(){
	v +=a*dt;
	document.getElementById("velocidad").innerHTML=v;
	y +=v*dt;
	document.getElementById("altura").innerHTML=y;
	
	//mover hasta que top sea un 70% de la pantalla
	if (y<70){ 
		document.getElementById("nave").style.top = y+"%"; 
	} else { 
		stop();
		finalNave();
	}
}

function motorOn(){
	a=-g;
	document.getElementById('chocar').src = "img/encendida2.png";
	if (timerFuel==null)
	timerFuel=setInterval(function(){ actualizarAltura(); }, 100);
	quedaFuel();	
	
}

function motorOff(){
	a=g;
	document.getElementById('chocar').src = "img/pequeña.png";
	clearInterval(timerFuel);
	timerFuel=null;	
}

function actualizarAltura(){
	//Aquí hay que cambiar el valor del marcador de Fuel...
	fuel-=1;
	document.getElementById("fuel").innerHTML=fuel;	
	fuelBar();	                                                                                                   
}

function fuelBar(){
document.getElementById("fuelbar").style.width = -1+"%";
}

function finalNave(){
	
	if(v>=5){
		//evento imagen
		document.getElementById('chocar').src = "img/explotada.gif";
			//window.alert("Has perdido");
			
		}else{
			window.alert("Has ganado");
		}
		//if(altura=0&&v<=5){
	}

function quedaFuel(){

		if(fuel==0){

			//window.alert("Se acabó el fuel");
			document.onkeydown = motorOff();
			fuel=0;
			//motorOff()
		}
	}
	
function mostrarOpciones(){
		document.getElementById("div5").style.display ='block';
	}
	
function mostrarOpcionesb(){
		document.getElementById("div6").style.display ='block';
	}
	
function ocultardiv(){
	document.getElementById("div6").style.display ='none';
	}
	

	
