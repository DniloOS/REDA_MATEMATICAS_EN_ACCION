function calificar() {
    let calificacion = 0; 
    let respuesta1 = document.getElementById("pregunta1").value;
    let respuesta2 = document.getElementById("pregunta2").value;
    let respuesta3 = document.getElementById("pregunta3").value;
    if (respuesta1 == "6") {
        calificacion++;
    }
    if (respuesta2 == "11") {
        calificacion++;
    }
    if (respuesta3 == "8") {
        calificacion++;
    }
    alert("Tu nota es: " + calificacion);
}