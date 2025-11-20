const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Evita que se recargue la página
  const text = input.value.trim();
  if (text === "") {
    // No agregar tareas vacías
    alert("Por favor escribe una tarea.");
    return;
  }
  const li = document.createElement("li");
  li.textContent = text;
  list.appendChild(li);
  input.value = "";
  input.focus();
});