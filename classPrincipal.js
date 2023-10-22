
class Principal {

constructor() { 
//marte
this. marte = new Marte (width/2, 10, 200, 100);
// nave
this.crearNave();
//asteroides
this.crearAsteroides();
//boton 
this.crearBotones(); 
  }
  crearAsteroides(){
    this.astero = [];
    for(let i=0; i < 10; i++){
      this.astero[i] = new Asteroides(10+i*50, 0, random(40, 30)); 
    } 
  } 
  crearNave(){
    this.cohete = new Cohete(width/8, 450, 50, 20);  
  }
  crearBotones(){
    this.fondos = 0;
    this.anchoB = 70;
    this.altoB = 70;
    this.bot1 = new Boton(0, 400, this.anchoB, this.altoB );
    this.bot2 = new Boton(width-this.anchoB, this.altoB, this.anchoB, this.altoB);
    this.bot3 = new Boton(300, 400, this.anchoB, this.altoB );
  }
  
  dibujar() { // lo de draw 
   // text("Pantalla "+ this.fondos, width/2, 100);
        if (this.fondos===0) { //////////////////intro//////////
      this.bot1.dibujarBoton(0, 1, "Inicio");
      textSize(15);
      text("Perdes: si te chocan mas de 5 asteroides", 200, 50);
      text("Ganas: si llegas a marte conduciendo el cohete con las flechas", 250, 90); 
      text("Podes dispara con la barra de espacio y facilitar el viaje", 200, 130);
        } else if (this.fondos==1) {  /// juego //////////////////////////////                    
    for(let i=0; i < 10; i++){
   if(this.chocan(this.cohete.cx, this.cohete.cy, this.cohete.cancho, this.astero[i].x, this.astero[i].y, this.astero[i].tam)){
       background(255, 0, 0);
    this.impacto = false;
       }
  this.astero[i].dibujar();
 }
  this.cohete.dibujar();
  this.DisparoAsteroides();
  this.marte.dibujar();
  if(this.chocan(this.cohete.cx, this.cohete.cy, this.cohete.cancho, this.marte.Mx, this.marte.My, this.marte.tamaño)){
       background(0, 0, 255);
    this.impacto = false; 
    this.fondos = 2;
  }
    
  } else if (this.fondos===2) { ////////////Ganaste//////////////
      this.bot3.dibujarBoton(2, 0, "Volver");
      text("GANASTE", 100, 100);
  } else if (this.fondos===3) { ////////////Perdiste//////////////
      this.bot3.dibujarBoton(2, 0, "Volver");
      text("PERDISTE", 100, 100);
        }    
  }
chocan(x, y, tam, cx, cy, ancho){ 
  let impacto = dist(x, y, cx, cy); 
  return impacto<tam/2+ancho/2;
}
LlegoaMarte(Mx, My, tamaño, cx, cy, ancho){ 
  let llegamos = dist(Mx, My, cx, cy); 
  return llegamos<tamaño/2+ancho/2;
}  
//acciones //////////////////////////////////////

/*chocan(){
   for (let i=0; i<10; i++) {
      if (this.choque(this.cohete.cx, this.cohete.cy, this.cohete.ancho, this.cohete.alto, this.astero[i].x, this.astero[i].y, this.astero[i].tam)&&this.astero[i].impacto) {
        background(200, 200, 0);
        this.astero[i].impacto = false;
      }
   }
}
  
choque(x, y, tam, cx, cy, cancho, calto){
  return x+tam>cx && x<cx+cancho && y+tam>cy && y<cy+calto; 
}*/

  precionoBotones() { // mousePressed 
    if (this.bot1.botonPress(0, this.altoB, this.anchoBot, this.altoB) && this.fondos===this.bot1.actual) {
      this.fondos = this.bot1.prox;
    }
    if (this.bot2.botonPress(width-this.anchoB, this.altoB, this.anchoB, this.altoB)&&this.fondos===this.bot2.actual) {
      this.fondos = this.bot2.prox;
    }
    if (this.bot3.botonPress(0, this.altoB, this.anchoB, this.altoB)&& this.fondos===this.bot3.actual) {
      this.fondos = this.bot3.prox;
    }
  }
  teclaPresionada(tecla){ // teclas del cohete y de la bala 
    this.tec = tecla;
    if(this.tec === LEFT_ARROW){
      this.cohete.moverIzquierda();
    }else if(this.tec === RIGHT_ARROW){
      this.cohete.moverDerecha();
    }else if(this.tec === UP_ARROW){
      this.cohete.moverArriba(); 
     }else if(this.tec === DOWN_ARROW){
      this.cohete.moverAbajo();  
    }else if(this.tec === 32){
      this.cohete.dispararBala();             
    }
  } 
 DisparoAsteroides(){  
    if(this.cohete.haDisparadoBala){
      for(let i=0; i <10; i++){
        this.astero[i].haTocadoLaBala(this.cohete.bala);
      } 
    }
  }
}
