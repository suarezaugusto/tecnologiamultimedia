//tp4
//Legajo: 95523/3
//Augusto Suarez, comision 1
//https://youtu.be/72pgIl2t5Uc


let fondo = [];
let fondos = 0;
let img = 2; 

let lx, ly, lancho, lalto; // variables lancha
let px, py, pancho, palto;// variables de parachute
let ax, ay, atam; // variables arriba

let pax = [100, 200, 300, 400];
let pay = [-100, -200, -300, -400];
let pav = [];
let cant = 5;


let Rescatadas = 0;
let Muertos = 0; 
let atapadas;
function setup() {
  createCanvas(500, 500);
  
  lancho = 100;
  lalto = 50;
  lx = width/2;
  ly = height-lalto;
  ax = lx;
  ay = ly;
  atam = lancho;
  px = 0;
  py = 50;
  pancho = lalto;
  palto = lalto; 
  atrapadas = true;
  
    for (let i=0; i<cant; i++) { //velocidad de parachute
        pav[i]= 1;
     }
  
}
function preload() {
  for (let i=0; i<img; i++) {
    fondo.push(loadImage('data/parachute'+i+'.png'));
  }
}   
function draw() {
if(fondos == 0){
image(fondo[0], 0, 0, 500, 500);
fill(255);
text("Regla: 1. Se mueve la lancha para la izquierda y derecha con las flechas", 10, 10);
text("Regla: 2. Los paracaidas van cayendo costantemente y tienes que atraparlos con la lancha", 10, 30);
text("Regla: 3. Si atrapas 10 ganas y si se escapan 10 pierdes", 10, 60);
rect(400, 400, 80, 50);
fill(0);
text("JUGAR", 420, 430);
} else if(fondos ==1){
image(fondo[1], 0, 0, 500, 500); 
lancha(lx, ly, lancho, lalto);
 
   if (keyIsPressed) {
    if (keyCode === RIGHT_ARROW && lx<width-lancho/2) {
      lx+=2;
    }
    if (keyCode === LEFT_ARROW && lx>lancho/2 ) { 
      lx-=2;
    }
  }
 
 if (atrapadas && py>0) {
    px = lx;
    py = ly;
  }
  // PARACHUTE 
  for (let i=0; i<cant; i++) {
    parachute(pax[i], pay[i], lancho, lalto);
    pay[i] += pav[i];
  if (pay[i]>height) {
    pay[i] = random(-300, -100);
        Muertos++;
  } else if (Muertos>9){
    fondos = 2;
    }
  if (seTocan(px, py, pax[i], pay[i], lancho, lalto)) {
     pay[i] = random(-300, -100);
     Rescatadas++;
   } else if (Rescatadas>9){
    fondos = 3; 
    }
   }
fill(255, 0, 0);
text("RESCATADAS "+ Rescatadas, 50, 50);
text("MUERTOS " + Muertos, 400, 50);
} else if(fondos == 2){
   //perdiste 
fill(255, 0, 0); 
text("PERDISTE, QUE MAL INTENTA OTRA VEZ", 100, 300); 
rect(400, 400, 80, 50);
fill(0);
text("REINICIAR", 420, 430);
} else if(fondos == 3){
  //ganaste 
fill(255, 0, 0);
text("GANASTE, ERES MUY BUENO", 100, 300);  
rect(400, 400, 80, 50);
fill(0);
text("REINICIAR", 420, 430);
}
}
function seTocan(x, y, x1, y1, ancho, alto) {
  if (x>x1&& x<x1+ancho && y>y1 && y<y1+alto) {
    return true;
  } else {
    return false;
  }
}

function mousePressed(){
if(boton(400, 400, 80, 50)&& fondos==0){
  fondos=1;
} else if(boton(400, 400, 80, 50)&& fondos==2){
  fondos=0;
} else if(boton(400, 400, 80, 50)&& fondos==3){
  fondos=0;
}
}
function boton(x, y, ancho, alto){
if (mouseX>x&& mouseX<x+ancho && mouseY>y && mouseY<y+alto) {
    return true;
  } else {
    return false;
  }
}
function parachute(x, y, ancho, alto) {
  fill(0, 255, 0);
  ellipseMode(CORNER);
ellipse(x, y, ancho, alto);
}
function lancha(x, y, ancho, alto) {
  fill(0);
  rectMode(CENTER);
  rect(x, y, ancho, alto);
}
 
