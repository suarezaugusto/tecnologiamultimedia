// TP0 COMISION 1 
// AUGUSTO SUAREZ
size(800, 400);

PImage paisajedemontaña;// nombre de la variable donde guardo la imagen 
paisajedemontaña = loadImage("paisaje de montaña.jpg");
//paisajedemontaña.resize(400, 400);

background(150, 204, 227);//cielo
image(paisajedemontaña, 0, 0, 400, 400);
noStroke();
fill(189, 199, 229);// nubes 
ellipse(500, 50, 200, 50);
ellipse(550, 40, 200, 50);
ellipse(600, 55, 200, 50);
ellipse(700, 60, 200, 50);
ellipse(750, 40, 200, 50);
fill(192, 203, 224);//nubes
ellipse(500, 100, 200, 50);
ellipse(700, 100, 200, 50);
ellipse(600, 130, 200, 50);
fill (71, 90, 126);// montañas azules
rect(400, 170, 800, 300);
triangle(600, 200, 700, 150, 800, 210);
triangle(400, 170, 560, 140, 800, 210);
fill(20, 220, 15);// colinas verdes 
rect(400, 210, 800, 300);
triangle(400, 210, 500, 175, 600, 210);
triangle(400, 210, 500, 175, 800, 210);
triangle(650, 210, 700, 190, 800, 210);
fill(7, 93, 10);// arboles 
triangle( 480, 175, 460, 210, 500, 210); 
triangle(440, 165, 420, 200, 460, 200); 
triangle( 420, 185, 400, 220, 440, 220);
triangle( 480, 160, 460, 190, 500, 190); 
triangle(780, 180, 760, 210, 800, 210); 
triangle( 760, 190, 750, 210, 790, 210); 
triangle( 760, 220, 750, 250, 790, 250); 
triangle(780, 230, 750, 250, 800, 250); 
fill(191, 128, 10);// camino de tierra 
triangle(500, 800, 500, 175, 650, 800); 
