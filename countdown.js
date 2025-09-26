// Archivo: countdown.js

function calcularCuentaRegresiva() {
    // Establece la fecha del evento (12 de diciembre de 2025)
    const fechaEvento = new Date("December 12, 2025 05:00:00").getTime();

    // Obtiene la fecha y hora actual
    const ahora = new Date().getTime();

    // Calcula la diferencia de tiempo
    const diferencia = fechaEvento - ahora;

    // Fórmulas para calcular días, horas, minutos y segundos
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    
    // Encuentra el elemento en el HTML donde mostraremos el conteo
    const elementoContador = document.getElementById("contador-dias");
    
    if (diferencia > 0) {
        // Muestra los días restantes en el HTML
        elementoContador.innerHTML = `¡Faltan **${dias}** días para mis XV!`;
    } else {
        // Si el evento ya pasó
        elementoContador.innerHTML = `🎉 ¡Hoy es el gran día! 🎉`;
    }
}

// Llama a la función de inmediato y la actualiza cada 1000 milisegundos (1 segundo)
calcularCuentaRegresiva();
setInterval(calcularCuentaRegresiva, 1000 * 60 * 60); // Se actualiza cada hora para los días

// Nota: Para actualizar segundos, se usaría: setInterval(calcularCuentaRegresiva, 1000);
