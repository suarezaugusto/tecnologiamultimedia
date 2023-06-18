// Augusto Suarez
// comision 1
// link: 
 PImage grilla; 
//color a;
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
cuadradosG();
}

 

  
