// Augusto Suarez
// comision 1
// link: https://youtu.be/SmaQtdf85f0
 PImage grilla; 
void setup() {
  size(800, 400);
  grilla = loadImage("grilla.jpg"); 
rectMode(RADIUS);
 noStroke();
}

void draw() {
  background(255);
image(grilla, 0, 0, width/2, height);
cuadrados();   

}
void mousePressed(){
}
 

  
