class Juego {
  constructor(){
//marte
this.marte = new Marte (width/2, 10, 200, 100);
// nave
this.crearNave();
//asteroides
this.crearAsteroides();
 
  }
  
 
  display(){
        for(let i=0; i < 10; i++){
   if(this.chocan(this.cohete.cx, this.cohete.cy, this.cohete.cancho, this.astero[i].x, this.astero[i].y, this.astero[i].tam)){
       background(255, 0, 0);
    this.impacto = false;
    this.choque++; 
    text("  "+ this.choque, 50, 50);
   }
 if (this.choque === 1) {
        this.reiniciarJuego();
          this.pantalla = 7;
 }
  this.astero[i].dibujar();
 }
  this.cohete.dibujar();
  this.DisparoAsteroides();
  this.marte.dibujar();
  if(this.LlegoaMarte(this.cohete.cx, this.cohete.cy, this.cohete.cancho, this.marte.Mx, this.marte.My, this.marte.tamaño)){
    this.impacto = false;
    this.pantalla = 6;
  } 
 }
 
chocan(x, y, tam, cx, cy, ancho){ 
  let impacto = dist(x, y, tam, cx, cy, ancho); 
  return impacto<tam/4+ancho/4;
}
LlegoaMarte(Mx, My, tamaño, cx, cy, ancho){ 
  let llegamos = dist(Mx, My, cx, cy); 
  return llegamos<tamaño/4+ancho/4;
}  

 DisparoAsteroides(){  
    if(this.cohete.haDisparadoBala){
      for(let i=0; i <10; i++){
        this.astero[i].haTocadoLaBala(this.cohete.bala);
      } 
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
  
  crearAsteroides(){
    this.astero = [];
    for(let i=0; i < 10; i++){
      this.astero[i] = new Asteroides(10+i*50, 0, random(40, 30)); 
      this.choque = 0;
   
    } 
   } 
  crearNave(){
    this.cohete = new Cohete(width/8, 450, 50, 20);

   }
   
 reiniciarJuego(){
   this.cohete = [];
    this.astero = [];
    this.crearNave();
    this.crearAsteroides();
 }
   
  
}
