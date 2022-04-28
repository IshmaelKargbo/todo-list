import "./style.css";
import TodoStore from "./modules/todo-store";

const store = new TodoStore();
const todosContainer = document.getElementById("todoList");
const form = document.getElementById("form");

const renderTodo = () => {
  todosContainer.innerHTML = '';
  
  store.store().forEach((todo) => {
    const todoItem = document.createElement("li");
    todoItem.innerHTML = `
        <div class="title">
            <input id="${todo.Index}" type="checkbox" cheecked="${todo.Completed} value="${todo.Completed}">
            <label for="${todo.Index}">${todo.Description}</label>
        </div>
        <button>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="17" height="17"
                viewBox="0 0 17 17">
                <g>
                </g>
                <path
                    d="M10.935 2.016c-0.218-0.869-0.999-1.516-1.935-1.516-0.932 0-1.71 0.643-1.931 1.516h-3.569v1h11v-1h-3.565zM9 1.5c0.382 0 0.705 0.221 0.875 0.516h-1.733c0.172-0.303 0.485-0.516 0.858-0.516zM13 4h1v10.516c0 0.827-0.673 1.5-1.5 1.5h-7c-0.827 0-1.5-0.673-1.5-1.5v-10.516h1v10.516c0 0.275 0.224 0.5 0.5 0.5h7c0.276 0 0.5-0.225 0.5-0.5v-10.516zM8 5v8h-1v-8h1zM11 5v8h-1v-8h1z" />
            </svg>
        </button>
    `;

    todosContainer.appendChild(todoItem);
  });
};

const addTodo = (e) => {
  e.preventDefault();
  const todo = Object.fromEntries(new FormData(e.target).entries());

  if (todo.description !== "") {
    store.add(todo.description);
    renderTodo();
    form.reset();
  }
};

form.addEventListener("submit", addTodo);

renderTodo();
