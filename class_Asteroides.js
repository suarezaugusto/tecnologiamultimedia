class Asteroides {
  constructor(x, y, tam) {
    this.x = x;
    this.y = y;
    this.V = random(1.5, 2.9); 
    this.tam = tam;  
    this.vida = true;
    this.bala = new Bala();
  }
  
  dibujar(){
    if(this.vida){
      fill(0, 255, 0);
      ellipse(this.x, this.y, this.tam);
      this.movimiento();
    }
  }
  movimiento(){
    this.y += this.V;
    if(this.y>height){
      this.y = -this.tam;
    }
  }
  matar(){
    this.vida = false;
  }
  
  haTocadoLaBala(bala){
    if(dist(this.x, this.y, bala.Bx, bala.By) < 20 ){
      this.matar();    
   }
 }

}
