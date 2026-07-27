


let reservas = [];


document.addEventListener("DOMContentLoaded", () => {
    const titulo = document.querySelector("header h1");
    titulo.textContent = "Sistema de Reservación de Aulas - Activo";
});


const formReserva = document.querySelector("#reservas form");

// Listener para el envío del formulario
formReserva.addEventListener("submit", (e) => {
    e.preventDefault(); // evitar recarga

    // Obtener valores
    const docente = formReserva.querySelector("input[type='text']").value;
    const aula = formReserva.querySelectorAll("input[type='text']")[1].value;
    const fecha = formReserva.querySelector("input[type='date']").value;
    const horaInicio = formReserva.querySelectorAll("input[type='time']")[0].value;
    const horaFin = formReserva.querySelectorAll("input[type='time']")[1].value;

    // Guardar en el estado
    reservas.push({ docente, aula, fecha, horaInicio, horaFin });

    // Mostrar reservas en la UI
    mostrarReservas();


    alert(" Reserva registrada correctamente");
});

// ===============================
// Interacción visual
// ===============================

function mostrarReservas() {
    const seccionUsuarios = document.querySelector("#usuarios");
    seccionUsuarios.innerHTML = "<h2>Usuarios</h2>";

    if (reservas.length === 0) {
        seccionUsuarios.innerHTML += "<p>No hay reservas registradas.</p>";
        return;
    }

    const lista = document.createElement("ul");
    reservas.forEach(r => {
        const item = document.createElement("li");
        item.textContent = `${r.docente} reservó ${r.aula} el ${r.fecha} de ${r.horaInicio} a ${r.horaFin}`;
        lista.appendChild(item);
    });

    seccionUsuarios.appendChild(lista);
}



const btnToggle = document.createElement("button");
btnToggle.textContent = "Mostrar/Ocultar Aulas";
btnToggle.classList.add("destacado");
document.querySelector("#aulas").prepend(btnToggle);

btnToggle.addEventListener("click", () => {
    const aulasSection = document.querySelector("#aulas article");
    aulasSection.classList.toggle("oculto");
});
