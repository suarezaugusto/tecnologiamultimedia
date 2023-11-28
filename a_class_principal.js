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
     load() {
    this.imagenes = [];
    for (let i = 0; i < 7; i++) {
      this.imagenes[i] = loadImage("data/img" + i + ".jpg");
    }
  }
  crearBotones(){
    this.pantalla = 0;
    this.anchoBot = 140;
    this.altoBot = 500;
    this.bot1 = new Boton(0, this.altoBot, this.anchoBot, this.altoBot/8);
    this.bot2 = new Boton(width-this.anchoBot, this.altoBot, this.anchoBot, this.altoBot/8);
  }
   dibujar() {
     textSize(20);
    if (this.pantalla===0) {
      this.bot1.dibujarBoton(0, 1, "Inicio");
      text("Pantalla "+ this.pantalla, width/2, 100);
    } else if (this.pantalla===1) {
      image(this.imagenes[1], 0, 0, 600, 600);
      this.bot2.dibujarBoton(1, 2, "Siguiente");
      text( " \n Las brujas con ojos de fuego, al rededor de la caldera calentando un líquido espeso amarillo \n, y preguntan ¿Dónde están el cristal?¿La cera está lista?¿Lasss agujaaas?",  width/2, 50);
    } else if (this.pantalla===2) {
      image(this.imagenes[2], 0, 0, 600, 600);
      this.bot1.dibujarBoton(2, 3, "Siguiente");
      text("La aguja atraviesa el corazón del muñeco de cera, armado por las manos verdes de las brujas, con entrañas venenosas, cantando que el trabajo y las trabas redoblemos", width/2, 50);
    } else if (this.pantalla===3) {
      image(this.imagenes[3], 0, 0, 600, 600);
      this.bot1.dibujarBoton(3, 4, "Siguiente");
      text("Se gritan entre ellas que miren con atención el cristal el cual nos muestra como agonizan unos hombres por sus vidas, en cohete", width/2, 50);
    } else if (this.pantalla===4) {
      image(this.imagenes[4], 0, 0, 600, 600);
      this.bot1.dibujarBoton(4, 5, "Siguiente");
      text("Los hombres están al rededor de un cadáver que murió Simplemente se murió, todos respiran como si estuviera recuperando el aire de los pulmones, sorprendidos del suceso ocurrido", width/2, 50);
    } else if (this.pantalla===5) {
      background(0);
      this.crearjuego.display();
    } else if (this.pantalla===6) {
     this.crearjuego.reiniciarJuego();
      this.bot1.dibujarBoton(6, 7, "Siguiente");
      text("Los astronautas hablan de los compañeros que murieron en el trascurso del viaje, sobre las pesadillas que tuvieron sobre criaturas sobrenaturales, miedos y temores", width/2, 50);
    } else if (this.pantalla===7) {
      image(this.imagenes[5], 0, 0, 600, 600);
      this.bot1.dibujarBoton(7, 0, "Volver");
    text("Las brujas miran hacia una ciudad esmeralda al rededor del mar seco, en una de las torres un hombre observa", width/2, 50);
    }
   }   
 crearteclas(){
    this.crearjuego.teclaPresionada(keyCode);
 }
  accionarBotones() {
    if (this.bot1.botonPress(0, this.altoBot, this.anchoBot, this.altoBot) && this.pantalla===this.bot1.actual) {
      this.pantalla = this.bot1.prox;
    }
    if (this.bot2.botonPress(width-this.anchoBot, this.altoBot, this.anchoBot, this.altoBot)&&this.pantalla===this.bot2.actual) {
      this.pantalla = this.bot2.prox;
    } 
  }
}
