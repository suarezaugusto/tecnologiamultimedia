void botones(int x, int y, int ancho, int alto, String text) {
 if (boton(x, y, ancho, alto)) {
    fill(255);
  } else {
    fill(150);
  }
  rect(x, y, ancho, alto, alto/2);
  fill(0); 
  textSize(20);
  text(text, x, y+alto/2);
  
}
