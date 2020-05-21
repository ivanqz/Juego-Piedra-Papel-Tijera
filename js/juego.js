/*

JUEGO: PIEDRA,PAPEL, TIJERA
------------------------------
*/

//VARIABLES
// piedra = 0, papel = 1, tijera = 2

var opciones=["piedra", "papel", "tijera"];


//FUNCIONES
function juego (jugador1, jugador2) {
    //Gana Jugador1
    if(jugador1==0 && jugador2==2 || jugador1==1 && jugador2==0 || jugador1==2 && jugador2==1) {
        console.log(`GANA EL JUGADOR 1, porque ${opciones[jugador1]} siempre gana a ${opciones[jugador2]}`);
    }

    else if(jugador2==0 && jugador1==2 || jugador2==1 && jugador1==0 || jugador2==2 && jugador2==1){
        console.log(`GANA EL JUGADOR 2, porque ${opciones[jugador2]} siempre gana a ${opciones[jugador1]}`)
    }
        
    //Empate
    if (jugador1, jugador2) {
        console.log(`EMPATE por ${opciones[jugador1]}`);
    }


}

//Ver en consola
console.log("piedra \=0, papel= \=1, tijera \=2");