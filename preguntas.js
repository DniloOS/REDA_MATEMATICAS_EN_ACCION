function calificar() {
    let calificacion = 0;
    const respuestasCorrectas = {
        pregunta1: "6",
        pregunta2: "11",
        pregunta3: "8"
    };

    const obtenerRespuesta = (id) => document.getElementById(id).value;

    for (const pregunta in respuestasCorrectas) {
        const respuesta = obtenerRespuesta(pregunta);
        if (respuesta === respuestasCorrectas[pregunta]) {
            calificacion++;
        }
    }

    mostrarResultado(calificacion);
}

function mostrarResultado(calificacion) {
    const mensaje = `Tu nota es: ${calificacion}`;
    const resultadoElemento = document.getElementById("resultado");
    
    if (resultadoElemento) {
        resultadoElemento.textContent = mensaje;
    } else {
        const resultadoDiv = document.createElement("div");
        resultadoDiv.id = "resultado";
        resultadoDiv.textContent = mensaje;

        const formulario = document.querySelector("form");
        formulario.insertAdjacentElement("afterend", resultadoDiv);
    }
}
