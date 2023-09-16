alert("◄ PENALES ► --- Abrí la consola con F12 para ver marcador")


const IZQUIERDA = 40;
const DERECHA = 60;

const equipoUser = {
  nombre: 'Usuario',
  goles: 0,
  ventaja: 0,
  desventaja: 0,
};

const equipoCPU = {
  nombre: 'CPU',
  goles: 0,
  ventaja: 0,
  desventaja: 0,
};

let turno = 0;



while (turno<5) {

  patea();
 
  resultado();
  

  ataja();
  
  resultado();
  
  turno++
  console.log("--------  TURNO " + turno + "   --------")

  if (equipoUser.ventaja > (5 - turno)) {
    console.log("¡GANASTE!");
    break;
}
  if(equipoUser.desventaja > (5 - turno)) {
    
    console.log("...Perdiste...");
    break;
  }
 
}

if (equipoUser.goles === equipoCPU.goles) {
while (equipoUser.goles === equipoCPU.goles) {

  patea();
  
  resultado();
 
  ataja();

  resultado();
}
  
}

  console.log("---------o FINAL! o---------");
  resultado();

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
        equipoUser.goles++;
        equipoUser.ventaja++;
        equipoUser.desventaja--;  

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
      equipoCPU.goles++;
      equipoCPU.ventaja--;
      equipoCPU.desventaja++;
    }
}

function resultado() {
  console.log("---------o---------o---------");
  console.log("|    Usuario: " +  equipoUser.goles + "    CPU: " + equipoCPU.goles + "    |");
  console.log("---------o---------o---------");
}
