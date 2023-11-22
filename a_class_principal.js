class Principal {
  constructor(){
    //IMAGENES
    this.load();
    //BOTONES
    this.crearBotones();
    //JUEGO
    this.crearjuego = new Juego();
    //TECLAS
    this.crearteclas();
    
  }
    
  crearBotones(){
    this.pantalla = 0;
    this.anchoBot = 140;
    this.altoBot = 500;
    this.bot1 = new Boton(0, this.altoBot, this.anchoBot, this.altoBot/8);
    this.bot2 = new Boton(width-this.anchoBot, this.altoBot, this.anchoBot, this.altoBot/8);
    
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
      this.bot1.dibujarBoton(2, 3, "Volver");
          text("Pantalla "+ this.pantalla, width/2, 100);
    } else if (this.pantalla===3) {
         image(this.imagenes[4], 0, 0, 600, 600);
       this.bot1.dibujarBoton(3, 4, "Volver");
        text("Pantalla "+ this.pantalla, width/2, 100);
  } else if (this.pantalla===4) {
       image(this.imagenes[5], 0, 0, 600, 600);
     this.bot1.dibujarBoton(4, 5, "Volver");
      text("Pantalla "+ this.pantalla, width/2, 100);
  } else if (this.pantalla===5) {
        background(0);
        this.crearjuego.display();
  } else if (this.pantalla===6) {
     this.bot1.dibujarBoton(6, 7, "Volver");
           text("GANASTE", 100, 100);
      text("Pantalla "+ this.pantalla, width/2, 100);
  } else if (this.pantalla===7) {
      this.crearjuego.reiniciarJuego(); 
    image(this.imagenes[6], 0, 0, 600, 600);
     this.bot1.dibujarBoton(7, 0, "Volver");
      text("Pantalla "+ this.pantalla, width/2, 100);
  } 
 }
 
 crearteclas(){
    this.crearjuego.teclaPresionada(keyCode);
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
}
