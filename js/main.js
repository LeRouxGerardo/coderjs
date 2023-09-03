alert("◄ PENALES ► --- Abrí la consola con F12 para ver marcador")


const IZQUIERDA = 40;
const DERECHA = 60;

let golesUser = 0;
let golesCpu = 0;
let ventaja = 0;
let desventaja= 0;
let turno = 0;



while (turno<5) {

 patea();
 
  
  console.log("---------o---------o---------");
  console.log("|    Usuario: " +  golesUser + "    CPU: " + golesCpu + "    |");
  console.log("---------o---------o---------");

  ataja();
  
  console.log("---------o---------o---------");
  console.log("|    Usuario: " +  golesUser + "    CPU: " + golesCpu + "    |");
  console.log("---------o---------o---------");

  
  turno++
  console.log("--------  TURNO " + turno + "   --------")

  if (ventaja > (5 - turno)) {
    console.log("¡GANASTE!");
    break;
}
  if(desventaja > (5 - turno)) {
    
    console.log("...Perdiste...");
    break;
  }
 
}

if (golesUser === golesCpu) {
while (golesUser === golesCpu) {

  patea()
  
  console.log("---------o---------o---------");
  console.log("|    Usuario: " +  golesUser + "    CPU: " + golesCpu + "    |");
  console.log("---------o---------o---------");
 
  ataja()


  console.log("---------o---------o---------");
  console.log("|    Usuario: " +  golesUser + "    CPU: " + golesCpu + "    |");
  console.log("---------o---------o---------");
}
  
}

  console.log("---------o FINAL! o---------")
  console.log("---------o---------o---------");
  console.log("|    Usuario: " +  golesUser + "    CPU: " + golesCpu + "    |");
  console.log("---------o---------o---------");

function patea () {
    let pateaUser = prompt("Tu turno de PATEAR, escribí: Izquierda, Medio o Derecha").toUpperCase();
    let atajaCpu = Math.ceil(Math.random()*100);


    let arquero = false;

    if (pateaUser === 'IZQUIERDA') {
        if (atajaCpu <= IZQUIERDA) {
          arquero = true;
        }
      } else if (pateaUser === 'MEDIO') {
        if (atajaCpu > IZQUIERDA && atajaCpu < DERECHA) {
            arquero = true;
        }
      } else if (pateaUser === 'DERECHA') {
        if (atajaCpu >= DERECHA) {
            arquero = true;
        }
      } else {
        console.log("Elegí una opción válida");
        alert("Elegí una opción válida");
        patea();
        return;
      }
      
      if (arquero) {
        alert("...Atajo el Arquero...");
      } else {
        alert("¡GOOOOOOOOOOL!");
        golesUser++;
        ventaja++;
        desventaja--;  

}
}


function ataja () {
    let atajaUser = prompt("Tu turno de ATAJAR, escribí: Izquierda, Medio o Derecha").toUpperCase();
    let pateaCpu = Math.ceil(Math.random()*100);
    
    let arquero = false;
  
    if (atajaUser === 'IZQUIERDA') {
      if (pateaCpu <= IZQUIERDA) {
        arquero = true;
      }
    } else if (atajaUser === 'MEDIO') {
      if (pateaCpu > IZQUIERDA && pateaCpu < DERECHA) {
          arquero = true;
      }
    } else if (atajaUser === 'DERECHA') {
      if (pateaCpu >= DERECHA) {
          arquero = true;
      }
    } else {
      console.log("Elegí una opción válida");
      alert("Elegí una opción válida");
      ataja();
      return;
    }
    
    if (arquero) {
      alert("¡Atajo el Arquero!");
    } else {
      alert("...GOL..."); 
      golesCpu++;
      ventaja--;
      desventaja++;
    }
}