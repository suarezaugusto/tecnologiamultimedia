void cuadrados(){
int  ubicx = 590; 
 int ubicy = 200; 
 
  for( int i = 218; i> 0; i-=21) {
    for( int j = 200; j> 0; j-=21) { 
    if ((i+j)%2==0) {
      fill (255);
    } else {
      fill (0);
    }
    
    rect(ubicx, ubicy, i, j);
  }
  }
    for( int i = 160; i> 0; i-=15) {
    for( int j = 160; j> 0; j-=15) { 
    if ((i+j)%2==0) {
      fill (255);
    } else {
      fill (0);
    }
   
    rect(ubicx, ubicy, i, j);
  }
  }
  for( int i = 130; i> 0; i-=15) {
    for( int j = 130; j> 0; j-=15) { 
    if ((i+j)%2==0) {
      fill (255);
    } else {
      fill (0);
    }
    
    rect(ubicx, ubicy, i, j);
  }
  }
  for( int i = 90; i> 0; i-=13) {
    for( int j = 90; j> 0; j-=13) { 
    if ((i+j)%2==0) {
      fill (255);
    } else {
      fill (0);
    }
    rect(ubicx, ubicy, i, j);
  }
  }
 for( int i = 65; i> 0; i-=11) {
    for( int j = 65; j> 0; j-=11) { 
    if ((i+j)%2==0) {
      fill (255);
    } else {
      fill (0);
    }
    rect(ubicx, ubicy, i, j);
  }
 }
  for( int i = 30; i> 0; i-=11) {
    for( int j = 30; j> 0; j-=11) { 
    if ((i+j)%2==0) {
      fill (255);
    } else {
      fill (0);
    }
    rect(ubicx, ubicy, i, j);
  }
  }
 for( int i = 10; i> 0; i-=5){
    for( int j = 10; j> 0; j-=5) { 
    if ((i+j)%2==0) {
      fill (0);
    } else {
      fill (255);
    }
     
    rect(ubicx, ubicy, i, j);
   }
  }
}
