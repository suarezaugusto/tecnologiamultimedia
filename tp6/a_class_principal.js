class Principal{
  constructor(){
    //IMAGENES
    this.load();
    //BOTONES
    this.pantalla = 0;
    this.anchoBot = 140;
    this.altoBot = 500;
    this.bot1 = new Boton(0, this.altoBot, this.anchoBot, this.altoBot/8 );
    this.bot2 = new Boton(width-this.anchoBot, this.altoBot, this.anchoBot, this.altoBot/8);
    this.bot3 = new Boton(0, this.altoBot, this.anchoBot, this.altoBot/8 );
  }
  
   dibujar() {

    if (this.pantalla===0) {
    image(this.imagenes[0], 0, 0, 600, 600);
      this.bot1.dibujarBoton(0, 1, "Inicio");
          text("Pantalla "+ this.pantalla, width/2, 100);
    } else if (this.pantalla==1) {
    image(this.imagenes[1], 0, 0, 600, 600);
      this.bot2.dibujarBoton(1, 2, "Siguiente");
          text("Pantalla "+ this.pantalla, width/2, 100);
    } else if (this.pantalla===2) {
    image(this.imagenes[3], 0, 0, 600, 600);
      this.bot3.dibujarBoton(2, 0, "Volver");
          text("Pantalla "+ this.pantalla, width/2, 100);
    }
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
  }
  
  
}
