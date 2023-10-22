
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
    this.cohete = new Cohete(width/8, 450, 20, 50);  
  }
  crearBotones(){
    this.fondos = 0;
    this.anchoB = 60;
    this.altoB = 60;
    this.bot1 = new Boton(0, 400, this.anchoB, this.altoB );
    this.bot2 = new Boton(width-this.anchoB, this.altoB, this.anchoB, this.altoB);
    this.bot3 = new Boton(300, 400, this.anchoB, this.altoB );
  }
  
  dibujar() { // lo de draw 
   // text("Pantalla "+ this.fondos, width/2, 100);
        if (this.fondos===0) { //////////////////intro//////////
      this.bot1.dibujarBoton(0, 1, "Inicio");
        } else if (this.fondos==1) {  /// juego ////////////////////////////// 
      this.bot2.dibujarBoton(1, 2, "C");                   
    for(let i=0; i < 10; i++){
    this.astero[i].dibujar();
   if(this.chocan(this.cohete.cx,this.cohete.cy,this.cohete.cancho, this.cohete.calto, this.astero[i].x, this.astero[i].y, this.astero[i].tam)){
       background(255,255,0);
   //  this.impacto = false;
       }
 }
  this.cohete.dibujar();
  this.DisparoAsteroides();
  this.marte.dibujar();
        } else if (this.fondos===2) { ////////////Ganaste//////////////
      this.bot3.dibujarBoton(2, 0, "Volver");
        }   
  }
chocan(x, y, tam, cx, cy, ancho){ 
  let impacto = dist(x, y, cx, cy); 
  return impacto<tam/2+ancho/2;
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
