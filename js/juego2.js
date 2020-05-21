/*
 JUEGO PIEDRA, PAPEL, TIJERA
 ----------------------------

 USANDO SWITCH

*/

//VARIABLES
// piedra = 0, papel = 1, tijera = 2

var opciones_juego=["piedra", "papel", "tijera"];


//FUNCIONES
switch(opciones_juego){
    case jugador1==0 && jugador2==2:
    case jugador1==1 && jugador2==0:
    case jugador1==2 && jugador2==1:
        console.log("JUGADOR 1 ERES EL GANADOR!");
        break;
    case jugador2==0 && jugador1==2:
    case jugador2==1 && jugador1==0:
    case jugador2==2 && jugador1==1:
        console.log("JUGADOR 2 HAS GANADO!");
        break;
    default:
        console.log("HABEIS EMPATADO!");
    }
