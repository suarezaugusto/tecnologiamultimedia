let Juego;

function setup() {
createCanvas(500, 500);
Juego = new Principal();
}
function draw() {
  background(200);
  Juego.dibujar();
}
function keyPressed(){
  Juego.teclaPresionada(keyCode);
}
function mousePressed() {
  Juego.precionoBotones();
}
