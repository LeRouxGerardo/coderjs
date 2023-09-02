alert("◄ PENALES ► --- Abrí la consola con F12 para ver marcador")


const IZQUIERDA = 40;
const DERECHA = 60;

let golesUser = 0;
let golesCpu = 0;
let difgol = 0;
let turno = 0;

while (turno<5) {
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
    continue;
  }
  
  if (arquero) {
    alert("...Atajo el Arquero...");
  } else {
    alert("¡GOOOOOOOOOOL!");
    golesUser++;
    difgol++;

    if (difgol > (5 - turno)) {
        console.log("¡GANASTE!");
        break;
    }
  }
  console.log("ataja cpu" + atajaCpu)
  console.log("DIFERENCIA DE GOLES " + difgol)
  console.log("---------o---------o---------");
  console.log("|    Usuario: " +  golesUser + "    CPU: " + golesCpu + "    |");
  console.log("---------o---------o---------");

  let atajaUser = prompt("Tu turno de ATAJAR, escribí: Izquierda, Medio o Derecha").toUpperCase();
  let pateaCpu = Math.ceil(Math.random()*100);

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
    continue;
  }
  
  if (arquero) {
    alert("¡Atajo el Arquero!");
  } else {
    alert("...GOL..."); 
    golesCpu++;
    difgol--
  }
  console.log("patea cpu" + pateaCpu);
  console.log("DIFERENCIA DE GOLES " + difgol)
  console.log("---------o---------o---------");
  console.log("|    Usuario: " +  golesUser + "    CPU: " + golesCpu + "    |");
  console.log("---------o---------o---------");

  turno++

  if (difgol > (5 - turno)) {
    console.log("¡GANASTE!");
    break;
  }
  
  console.log("turno" + turno);
 
}


while (golesUser === golesCpu) {
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
    continue;
  }
  
  if (arquero) {
    console.log("...Atajo el Arquero...");
    alert("...Atajo el Arquero...");
  } else {
    console.log("¡GOOOOOOOOOOL!"); 
    alert("¡GOOOOOOOOOOL!");
    golesUser++;
  }
  console.log("ataja cpu" + atajaCpu)
  console.log("---------o---------o---------");
  console.log("|    Usuario: " +  golesUser + "    CPU: " + golesCpu + "    |");
  console.log("---------o---------o---------");

  let atajaUser = prompt("Tu turno de ATAJAR, escribí: Izquierda, Medio o Derecha").toUpperCase();
  let pateaCpu = Math.ceil(Math.random()*100);

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
    continue;
  }
  
  if (arquero) {
    console.log("¡Atajo el Arquero!");
    alert("¡Atajo el Arquero!");
  } else {
    console.log("...GOL..."); 
    alert("...GOL...");
    golesCpu++;
  }
  console.log("patea cpu" + pateaCpu);
  console.log("---------o---------o---------");
  console.log("|    Usuario: " +  golesUser + "    CPU: " + golesCpu + "    |");
  console.log("---------o---------o---------");

  turno++
  
  console.log("turno" + turno);
 
}

console.log("---------o FINAL! o---------")
console.log("---------o---------o---------");
console.log("|    Usuario: " +  golesUser + "    CPU: " + golesCpu + "    |");
console.log("---------o---------o---------");
  