const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const text = input.value.trim();
  if (text === "") {
    alert("Por favor escribe una tarea.");
    return;
  }
  const li = document.createElement("li");
  const spanText = document.createElement("span");
  spanText.textContent = text;
  spanText.classList.add("todo-text");
  const actions = document.createElement("div");
  actions.classList.add("todo-actions");
  const completeButton = document.createElement("button");
  completeButton.textContent = "Completar";
  completeButton.addEventListener("click", function () {
    spanText.classList.toggle("todo-completed");
  });
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Eliminar";
  deleteButton.addEventListener("click", function () {
    list.removeChild(li);
  });
  actions.appendChild(completeButton);
  actions.appendChild(deleteButton);
  li.appendChild(spanText);
  li.appendChild(actions);
  list.appendChild(li);
  input.value = "";
  input.focus();
});
