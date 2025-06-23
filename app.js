// llevamos el codigogtml el js el formulario y la lista de tareas
const form = document.getElementById("form-tarea");
const listaTareas = document.getElementById("lista-tareas");

// Al momento de rellenar los formularios
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Nota para que cuando se envie debe tener el contenido

  // Esta perte junto con el id se llega a la parte de la pagina y llegue a las lista
  const nombre = document.getElementById("nombre").value;
  const fecha = document.getElementById("fecha").value;
  const descripcion = document.getElementById("descripcion").value;
  const tipo = document.getElementById("tipo").value;
  const prioridad = document.getElementById("prioridad").value;

  // esta parte para que no queden vacios y me de problemas
  if (!nombre || !fecha || !descripcion || !tipo || !prioridad) {
    alert("Recuerrda que todos los datos estan en obligatorios, porfavor llena completamente.");
    return; // Si algúna casilla esta sin datos se da de baja
  }

  // Crear un objeto para representar la tarea
  const tarea = {
    nombre,
    fecha,
    descripcion,
    tipo,
    prioridad
  };

  // Insertar la tarea en la lista sin recargar la página
  agregarTareaALista(tarea);

  // Limpiar el formulario después de agregar la tarea
  form.reset();
});

// Función para agregar una tarea a la lista
function agregarTareaALista(tarea) {
  // Crear un nuevo elemento de lista (li)
  const tareaElement = document.createElement("li");
  tareaElement.classList.add("tarea");

  // Crear el contenido de la tarea
  tareaElement.innerHTML = `
    <h3>${tarea.nombre}</h3>
    <p><strong>Fecha de entrega:</strong> ${tarea.fecha}</p>
    <p><strong>Descripción:</strong> ${tarea.descripcion}</p>
    <p><strong>Tipo:</strong> ${tarea.tipo}</p>
    <p class="prioridad"><strong>Prioridad:</strong> <span class="${tarea.prioridad}">${tarea.prioridad}</span></p>
    <button class="eliminar">Eliminar</button>
  `;

  // Agregar la tarea a la lista de tareas
  listaTareas.appendChild(tareaElement);

  // Agregar el evento de eliminar a la tarea
  const eliminarBtn = tareaElement.querySelector(".eliminar");
  eliminarBtn.addEventListener("click", function () {
    tareaElement.remove(); // Eliminar la tarea cuando se haga clic en el botón
  });
}
