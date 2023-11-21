class Principal {
  constructor(){
    //marte
    this. marte = new Marte (width/2, 10, 200, 100);
    // nave
    this.crearNave();
    //asteroides
    this.crearAsteroides();  
    //IMAGENES
    this.load();
    //BOTONES
    this.crearBotones();
  }
  crearBotones(){
    this.pantalla = 0;
    this.anchoBot = 140;
    this.altoBot = 500;
    
    this.bot1 = new Boton(0, this.altoBot, this.anchoBot, this.altoBot/8);
    this.bot2 = new Boton(width-this.anchoBot, this.altoBot, this.anchoBot, this.altoBot/8);
    this.bot3 = new Boton(0, this.altoBot, this.anchoBot, this.altoBot/8);
    this.bot4 = new Boton(0, this.altoBot, this.anchoBot, this.altoBot/8);
    this.bot5 = new Boton(0, this.altoBot, this.anchoBot, this.altoBot/8 );
    this.bot6 = new Boton(0, this.altoBot, this.anchoBot, this.altoBot/8);
    this.bot7 = new Boton(0, this.altoBot, this.anchoBot, this.altoBot/8);
    this.bot8 = new Boton(0, this.altoBot, this.anchoBot, this.altoBot/8);
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
   dibujar() {

    if (this.pantalla===0) {
    image(this.imagenes[1], 0, 0, 600, 600);
      this.bot1.dibujarBoton(0, 1, "Inicio");
          text("Pantalla "+ this.pantalla, width/2, 100);
    } else if (this.pantalla==1) {
    image(this.imagenes[2], 0, 0, 600, 600);
      this.bot2.dibujarBoton(1, 2, "Siguiente");
          text("Pantalla "+ this.pantalla, width/2, 100);
    } else if (this.pantalla===2) {
    image(this.imagenes[3], 0, 0, 600, 600);
      this.bot3.dibujarBoton(2, 3, "Volver");
          text("Pantalla "+ this.pantalla, width/2, 100);
    } else if (this.pantalla===3) {
         image(this.imagenes[4], 0, 0, 600, 600);
       this.bot4.dibujarBoton(3, 4, "Volver");
        text("Pantalla "+ this.pantalla, width/2, 100);
  } else if (this.pantalla===4) {
       image(this.imagenes[5], 0, 0, 600, 600);
     this.bot5.dibujarBoton(4, 5, "Volver");
      text("Pantalla "+ this.pantalla, width/2, 100);
  } else if (this.pantalla===5) {
        background(0); 
  for(let i=0; i < 10; i++){
   if(this.chocan(this.cohete.cx, this.cohete.cy, this.cohete.cancho, this.astero[i].x, this.astero[i].y, this.astero[i].tam)){
       background(255, 0, 0);
    this.impacto = false;
      } 
  this.astero[i].dibujar();
 }
  this.marte.dibujar();
  this.cohete.dibujar();
  this.DisparoAsteroides();
  if(this.chocan(this.cohete.cx, this.cohete.cy, this.cohete.cancho, this.marte.Mx, this.marte.My, this.marte.tamaño)){
    this.impacto = false; 
    this.pantalla = 7;
   }
  } else if (this.pantalla===6) {
     this.bot7.dibujarBoton(6, 7, "Volver");
      text("Pantalla "+ this.pantalla, width/2, 100);
  } else if (this.pantalla===7) {
          image(this.imagenes[6], 0, 0, 600, 600);
     this.bot8.dibujarBoton(7, 0, "Volver");
      this.reiniciarJuego(); 
      text("GANASTE", 100, 100);
      text("Pantalla "+ this.pantalla, width/2, 100);
  } 
 }
 
  chocan(x, y, tam, cx, cy, ancho){ 
  let impacto = dist(x, y, cx, cy); 
  return impacto<tam/4+ancho/4;
    }
  LlegoaMarte(Mx, My, tamaño, cx, cy, ancho){ 
  let llegamos = dist(Mx, My, cx, cy); 
  return llegamos<tamaño/2+ancho/2;
    }  
  load() {
    this.imagenes = [];
    for (let i = 0; i < 7; i++) {
      this.imagenes[i] = loadImage("data/img" + i + ".jpg");
    }
  }
  accionarBotones() {
    if (this.bot1.botonPress(0, this.altoBot, this.anchoBot, this.altoBot) && this.pantalla===this.bot1.actual) {
      this.pantalla = this.bot1.prox;
    }
    if (this.bot2.botonPress(width-this.anchoBot, this.altoBot, this.anchoBot, this.altoBot)&&this.pantalla===this.bot2.actual) {
      this.pantalla = this.bot2.prox;
    }
    if (this.bot3.botonPress(0, this.altoBot, this.anchoBot, this.altoBot)&& this.pantalla===this.bot3.actual) {
      this.pantalla = this.bot3.prox;
    } 
    if (this.bot4.botonPress(0, this.altoBot, this.anchoBot, this.altoBot)&& this.pantalla===this.bot4.actual) {
      this.pantalla = this.bot4.prox;
    }
    if (this.bot5.botonPress(0, this.altoBot, this.anchoBot, this.altoBot)&& this.pantalla===this.bot5.actual) {
      this.pantalla = this.bot5.prox;
    } 
    if (this.bot6.botonPress(0, this.altoBot, this.anchoBot, this.altoBot)&& this.pantalla===this.bot6.actual) {
      this.pantalla = this.bot6.prox;
    } 
    if (this.bot7.botonPress(0, this.altoBot, this.anchoBot, this.altoBot)&& this.pantalla===this.bot7.actual) {
      this.pantalla = this.bot7.prox;
    } 
     if (this.bot8.botonPress(0, this.altoBot, this.anchoBot, this.altoBot)&& this.pantalla===this.bot8.actual) {
      this.pantalla = this.bot8.prox;
    } 
  }
    teclaPresionada(tecla){ // teclas del cohete y de la bala 
    this.tec = tecla;
    if(this.tec === LEFT_ARROW ){
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
   reiniciarJuego(){
    this.cohete = [];
     this.astero = [];
      this.crearNave();
       this.crearAsteroides();
   }
    
}
