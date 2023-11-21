class Cohete{
  
  constructor(cx, cy, cancho){
    this.cx = cx;
    this.cy = cy;
    this.cancho = cancho; 
    this.bala = new Bala();
    this.marte = new Marte(); 
  }
  
  dibujar(){
    this.bala.dibujarBala();
    fill(0, 0, 200);
    ellipse(this.cx, this.cy, this.cancho);
  }
  

  
  moverAbajo(){
    this.cy += 30;
  }
  moverArriba(){
    this.cy -= 30;
  }
  moverDerecha(){
    this.cx += 30;
  }
  moverIzquierda(){
    this.cx -= 30;
  }
  

  
dispararBala(){
    this.bala = new Bala(this.cx+10, this.cy, 20);
    this.bala.disparar();
  }
  haDisparadoBala(){
    return this.bala.disparada;
  }
 
}
