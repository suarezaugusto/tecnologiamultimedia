//augusto suarez comision 1 
//legajo: 95523/3
//link: https://youtu.be/QtspUuAZjsI
int cant = 17;
int fondos = 0;
String [] muchotexto = {"Tres brujas tenebrosas y sombrias, con ojos de fuego, al rededor del caldero calentando \n un líquido espeso, y preguntan ¿Dónde están el cristal?¿La cera está lista?¿Lasss agujaaas?", "La aguja atraviesa el corazón del muñeco de cera, armado por las manos verdes de las brujas, \n con entrañas venenosas, cantando que el trabajo y las trabas redoblemos,\n diciendo que agarren el cristal", "Un cohete se movía por el espacio, desde el planeta tierra hacia el planeta Marte.\n Dentro de la nave agonizaban unos hombres", "Los astronautas hablan de los compañeros que murieron en el \n trascurso del viaje, sobre las pesadillas que tuvieron \n sobre criaturas sobrenaturales, miedos y temores", "El capitán de la nave habla sobre unos libros que tiene guardados,\n  y dice que están prohibidos en la tierra,  para que la humanidad solamente \n sea de mente clara, y se queda viendo cómo se va dimensionado el planeta Marte.", "Se sorprende, las brujas con sus manos verdes, por lo que dijo el capitán. \n Miran hacia una ciudad esmeralda rodeada del mar seco.", "En esa ciudad se encontraban autores muy conocidos por escribir\n sobre fantasía o lo sobrenatural,\n discutiendo las ideas, del cohete que se aproxima, llegando a Marte", "Los escritores con un miedo en común, la humanidad, hablan sobre\n la destrucción de su mundo y que decisión tomaran, \n si escapar a otro mundo o buscando en un valle ayuda", "Mientras los escritores piden ayuda a otros escritores desterrados \n y reunen a las ciaturas sobrenaturles, \n la nave llega a marte y aterriza", "Los astronautas bajan escuchando ruidos perturbadores,\n con miedo queman los últimos libros de fantasía.", "Los escritores, las criaturas, las brujas se  \n evaporizaron en el aire, como si nunca hubiesen existido", "Uno de los astronautas creyó ver como la ciudad esmeralda, \n que había leído una vez se derrumbarse, \n el capitán lo manda al psicoanalista.", "El capitan miro a su alrededor desilusionado por no encontrar nada,\n absolutamente nada.", "En ese momento la nave explota, por motivos desconocido,\n como si alguien chasqueo los dedos y boom ", "Las brujas se ríen y cantan con unas voces aterradoras,\n miran a una ciudad y gritan \n QUE EL FUEGO ARDA Y LOS CREADORES SE LEVANTEN DEL EXILIO", "Las criaturas sobrenaturales se reúnen, llamadas por el canto de las brujas,\n se juntas para planear con sus creadores que harán y ellos dicen todos juntos", " Ya llego la hora de volver" };  
float [] texto = new float[muchotexto.length]; 
PImage [] imagenes = new PImage[cant];
void setup() {
 size(600, 600);
   for (int imag = 0; imag<cant; imag++) {
  imagenes[imag] = loadImage("imagen" + imag + ".jpg");
 }
   for (int i = 0; i<texto.length; i++) {
  texto[i] = textWidth(muchotexto[i]); 
 }
}  
void draw(){
   if(fondos == 0){
image(imagenes[0], 0, 0, 600, 600);
botonesS();

   }else if(fondos == 1){
image(imagenes[1], 0, 0, 600, 600);
 botonesS(); 
 fill(255);
 text(muchotexto[0], 300, 50);
 
   }else if(fondos == 2){
image(imagenes[2], 0, 0, 600, 600);
 botonesS();
  fill(255);
  text(muchotexto[1], 300, 50);
  
   }else if(fondos == 3){
image(imagenes[3], 0, 0, 600, 600);
botonesS(); 
  fill(255);
  text(muchotexto[2], 300, 50);
  
   }else if(fondos == 4){
image(imagenes[4], 0, 0, 600, 600);
botonesS(); 
  fill(255, 0, 0);
  text(muchotexto[3], 300, 50);
  
   }else if(fondos == 5){
image(imagenes[5], 0, 0, 600, 600);
 botonesS(); 
 botonesC(); 
   fill(255);
   text(muchotexto[4], 300, 50);
   
   }else if(fondos == 6){
image(imagenes[6], 0, 0, 600, 600);
 botonesS(); 
   fill(0);
   text(muchotexto[5], 300, 50);

   }else if(fondos == 7){
image(imagenes[7], 0, 0, 600, 600);
botonesS(); 
  fill(255, 0, 0);
   text(muchotexto[6], 300, 50);

   }else if(fondos == 8){
image(imagenes[8], 0, 0, 600, 600);
 botonesS(); 
  fill(255);
   text(muchotexto[7], 300, 50);
   }else if(fondos == 9){
image(imagenes[9], 0, 0, 600, 600);
botonesS(); 
  fill(255);
   text(muchotexto[8], 300, 50);
   }else if(fondos == 10){
image(imagenes[10], 0, 0, 600, 600);
 botonesS(); 
  fill(200, 100, 100);
  textSize(20); 
   text(muchotexto[9], 300, 50);
   }else if(fondos == 11){
image(imagenes[11], 0, 0, 600, 600);
 botonesS(); 
  fill(0);
   text(muchotexto[10], 300, 50);
   }else if(fondos == 12){
image(imagenes[12], 0, 0, 600, 600);
 botonesS(); 
  fill(255);
   text(muchotexto[11], 300, 50);
   }else if(fondos == 13){
image(imagenes[13], 0, 0, 600, 600);
 botonesS(); 
  fill(255);
   text(muchotexto[12], 300, 50);
   }
   
   //otro final 
   else if(fondos == 14 ){
image(imagenes[14], 0, 0, 600, 600);
 botonesC(); 
  fill(255);
  text(muchotexto[13], 300, 50);
   }  else if(fondos == 15){
image(imagenes[6], 0, 0, 600, 600);
 botonesC(); 
  fill(0);
     text(muchotexto[14], 300, 50);
  } else if(fondos == 16){
image(imagenes[11], 0, 0, 600, 600);
 botonesC(); 
 fill(255); 
 text(muchotexto[15], 300, 50);
  } else if(fondos == 17){
image(imagenes[15], 0, 0, 600, 600);
botonesC();
 textSize(30);
fill(255); 
text(muchotexto[16], 300, 50);
  } else if(fondos == 18){
image(imagenes[16], 0, 0, 600, 600);
botonesR();
  }
  
}
void mousePressed() { 
  if(boton(500, 500, 70, 50)&&fondos==0) {
    fondos = 1;
     } else if(boton(500, 500, 70, 50)&&fondos==1){
       fondos = 2; 
     } else if(boton(500, 500, 70, 50)&&fondos==2){
       fondos = 3; 
     } else if(boton(500, 500, 70, 50)&&fondos==3){
       fondos = 4; 
     } else if(boton(500, 500, 70, 50)&&fondos==4){
       fondos = 5; 
     } else if(boton(500, 500, 70, 50)&&fondos==5){
       fondos = 6; 
     } else if(boton(500, 500, 70, 50)&&fondos==6){
       fondos = 7; 
     } else if(boton(500, 500, 70, 50)&&fondos==7){
       fondos = 8; 
     } else if(boton(500, 500, 70, 50)&&fondos==8){
       fondos = 9; 
     } else if(boton(500, 500, 70, 50)&&fondos==9){
       fondos = 10;   
     } else if(boton(500, 500, 70, 50)&&fondos==10){
       fondos = 11;   
     } else if(boton(500, 500, 70, 50)&&fondos==11){
       fondos = 12;   
     } else if(boton(500, 500, 70, 50)&&fondos==12){
       fondos = 13;
     } else if(boton(500, 500, 70, 50)&&fondos==13){
       fondos = 18;
   //botones otros
   
     } else if(boton(50, 500, 70, 50)&&fondos==5){
       fondos = 14; 
     } else if(boton(50, 500, 70, 50)&&fondos==14){
       fondos = 15;   
     }  else if(boton(50, 500, 70, 50)&&fondos==15){
       fondos = 16;   
     } else if(boton(50, 500, 70, 50)&&fondos==16){
       fondos = 17;   
     } else if(boton(50, 500, 70, 50)&&fondos==17){
       fondos = 18;   
     }  else if(boton(250, 500, 70, 50)&&fondos==18){
       fondos = 0;   
     } 
     
     
 }
boolean boton(int x, int y, float ancho, int alto){
  if(mouseX > x && mouseX < x+ancho && mouseY > y && mouseY < y+alto) {
    return true; 
  } else { 
    return false; 
  } 
}
