 PImage grilla; 
int cant = 20; 
int tam;

void setup() {
  size(800, 400);
   
  tam = width/cant; 
  grilla = loadImage("grilla.jpg"); 
rectMode(RADIUS);
 noStroke();

}

void draw() {
image(grilla, 0, 0, width/2, height);
  cuadrados7(); 
  cuadrados6(); 
  cuadrados5(); 
  cuadrados4();
  cuadrados3(); 
  cuadrados2(); 
  cuadrados1(); 
  fill(0);
  rect(595, 200, 2, 2); 
}
 
void mousePressed(){  
  }
    

  
