import './style.css';
import TodoStore from './modules/todo-store.js';

const store = new TodoStore();
const todosContainer = document.getElementById('todoList');
const form = document.getElementById('form');
const empty = document.getElementById('empty');
const clear = document.getElementById('clear');

// render all the todo
const renderTodo = () => {
  todosContainer.innerHTML = '';

  // Toggle empty and clear compete elements
  if (store.store().length === 0) {
    empty.style.display = 'block';
    clear.style.display = 'none';
  } else {
    empty.style.display = 'none';
    clear.style.display = 'block';
  }

  store.store().forEach((todo) => {
    const todoItem = document.createElement('li');

    const editState = `
      <input value=${todo.Description} autofocus type="text" class="edit"  id="field_${todo.Index}">
    `;

    const normalState = `
      <div class="title" id="edit_${todo.Index}">
          <input id="${todo.Index}" type="checkbox" cheecked="${todo.Completed} value="${todo.Completed}">
          <label for="${todo.Index}">${todo.Description}</label>
      </div>
      <button id="del_${todo.Index}">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="17" height="17"
              viewBox="0 0 17 17">
              <g>
              </g>
              <path
                  d="M10.935 2.016c-0.218-0.869-0.999-1.516-1.935-1.516-0.932 0-1.71 0.643-1.931 1.516h-3.569v1h11v-1h-3.565zM9 1.5c0.382 0 0.705 0.221 0.875 0.516h-1.733c0.172-0.303 0.485-0.516 0.858-0.516zM13 4h1v10.516c0 0.827-0.673 1.5-1.5 1.5h-7c-0.827 0-1.5-0.673-1.5-1.5v-10.516h1v10.516c0 0.275 0.224 0.5 0.5 0.5h7c0.276 0 0.5-0.225 0.5-0.5v-10.516zM8 5v8h-1v-8h1zM11 5v8h-1v-8h1z" />
          </svg>
      </button>
    `;

    // Set the current state based on weither the todo is on edit state or normal state
    todoItem.innerHTML = !todo.Edit ? normalState : editState;
    todosContainer.appendChild(todoItem);

    // set todo state to edit state
    const field = document.getElementById(`edit_${todo.Index}`);
    if (field) {
      field.addEventListener('dblclick', () => {
        store.editState(todo.Index, true);
        renderTodo();
      });
    }

    // remove todo
    const removeBtn = document.getElementById(`del_${todo.Index}`);
    if (removeBtn) {
      removeBtn.addEventListener('click', () => {
        store.remove(todo.Index);
        renderTodo();
      });
    }

    // check if edit to set focus on the edit input field
    if (todo.Edit) {
      const inputField = document.getElementById(`field_${todo.Index}`);

      inputField.focus();
      inputField.value = '';
      inputField.value = todo.Description;

      // set on keypress on the edit input to update the existing
      // data with the current one
      inputField.addEventListener('keypress', ({ key, target }) => {
        if (key === 'Enter' && target.value) {
          store.edit(todo.Index, target.value);
          renderTodo();
        }
      });

      // set blur to remove the edit state on the todo
      inputField.addEventListener('blur', () => {
        store.editState(todo.Index, false);
        renderTodo();
      });
    }
  });
};

// add new todo to the store
const addTodo = (e) => {
  e.preventDefault();
  const todo = Object.fromEntries(new FormData(e.target).entries());

  if (todo.description !== '') {
    store.add(todo.description);
    renderTodo();
    form.reset();
  }
};

form.addEventListener('submit', addTodo);

renderTodo();
