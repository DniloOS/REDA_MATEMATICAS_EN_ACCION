function resultado() {
    var p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, nota;

   
    if (document.getElementById('p11').checked==true) {p1=1}
    else {p1=0}
    
    if (document.getElementById('p24').checked==true) {p2=1}
    else {p2=0}
    
    if (document.getElementById('p33').checked==true) {p3=1}
    else {p3=0}
   
    if (document.getElementById('p41').checked==true) {p4=1}
    else {p4=0}
   
    if (document.getElementById('p52').checked==true) {p5=1}
    else {p5=0}
   
    if (document.getElementById('p61').checked==true) {p6=1}
    else {p6=0}
   
    if (document.getElementById('p73').checked==true) {p7=1}
    else {p7=0}
   
    if (document.getElementById('p88').checked==true) {p8=1}
    else {p8=0}
  
    if (document.getElementById('p91').checked==true) {p9=1}
    else {p9=0}

    if (document.getElementById('p01').checked==true) {p10=1}
    else {p10=0}

    nota=p1+p2+p3+p4+p5+p6+p7+p8+p9+p10;
    alert(" Aciertos: " + nota);
    window.location = 'Evaluacion.html'   

    }