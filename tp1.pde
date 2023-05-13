//tp1
//Augusto Suarez comision 1 
PImage jujuy1, jujuy2, jujuy3;
int inicio;
int pantalla = 1;
int movimientoDePantallas = 5000;
float posX, posY; 

void setup() {
  size(640, 480);
  jujuy1 = loadImage("jujuy1.jpg");
  jujuy2= loadImage("jujuy2.jpg");
  jujuy3= loadImage("jujuy3.jpg");
  inicio = millis();
  textSize(20);
}

void draw() {
  if (pantalla == 1) {
    image(jujuy1, 0, 0, 640, 480);
     text("Se ubica al noroeste del país, limitando al oeste con la República de Chile, \n con Bolivia al noerte y rodeada por la provincia de Salta.", posX, 100); 
  } else if (pantalla == 2) {
    image(jujuy2, 0, 0, 640, 480);
    text("De oeste a este tiende a bajar desde altitudes que van desde los 6000 \n a los 500 m s. n. m..", 60, posY);
  } else if (pantalla == 3) {
    image(jujuy3, 0, 0, 640, 480);
    
  rect(500, 400, 120, 45);
  text("Reiniciar", 500, 440, 120, 45);
    text("La serranía de Hornocal es una sierra ubicada \n a 25 kilómetros de la ciudad de Humahuaca ", posX, 65);
  }
  
  if (millis() - inicio >= movimientoDePantallas) {
    siguientePantalla();
  }
  posX+=1;
  posY+=1;
}
void siguientePantalla() {
  pantalla++;
  inicio = millis();
  if (pantalla > 1) {
    posX=0;
    posY=0;
  }
}

void mousePressed() {
  if (pantalla >= 3 && mouseX >= 500 && mouseX <= 620 && mouseY >= 400 && mouseY <= 445) {
    pantalla = 1;
    inicio = millis();
  }
}
