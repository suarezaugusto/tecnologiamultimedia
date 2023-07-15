void botonesS() {
  if (dist(mouseX, mouseY, 520, 520)<=20){
    fill(200, 50, 50);
  } else {
    fill(200, 100, 100);
  }
   rect(500, 500, 70, 50);
   fill(0); 
  text("Siguente", 535, 525); 
  textSize (15);
  textAlign (CENTER);
}
void botonesC() {
  if (dist(mouseX, mouseY, 100, 520)<=20){
    fill(50, 50, 200);
  } else {
    fill(100, 100, 200);
  }
   rect(50, 500, 70, 50);
   fill(0); 
  text("Otro", 75, 525); 
  textSize (15);
  textAlign (CENTER);
}
void botonesR() {
  if (dist(mouseX, mouseY, 300, 520)<=20){
    fill(50, 50, 200);
  } else {
    fill(100, 100, 200);
  }
   rect(250, 500, 70, 50);
   fill(0); 
  text("Reinicio", 280, 525); 
  textSize (15);
  textAlign (CENTER);
}
  
