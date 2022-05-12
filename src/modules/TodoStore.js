import Todo from './todo.js';

class TodoStore {
  #store = [];

  #localStorage = null;

  constructor(store = null) {
    if (store) this.#localStorage = store;
    else this.#localStorage = localStorage;

    this.#init();
  }

  #init() {
    const data = this.#localStorage.getItem('todo-store');

    if (!data) return;

    const store = JSON.parse(data);

    this.#store = store.map(
      (todo) => new Todo(todo.index, todo.description, todo.completed),
    );
  }

  #backup() {
    const storeData = this.#store.map((e) => e.data());
    this.#localStorage.setItem('todo-store', JSON.stringify(storeData));
  }

  store() {
    return this.#store;
  }

  hasCompleted() {
    const state = this.#store.find((todo) => Boolean(todo.Completed));
    return state !== undefined;
  }

  add(description) {
    const index = Math.random().toString(36).slice(2);
    const todo = new Todo(index, description, false);
    this.#store.push(todo);
    this.#backup();
  }

  editState(id, state) {
    this.#unEdit();
    const todoIndex = this.#store.findIndex((todo) => todo.Index === id);
    if (todoIndex < 0) return;
    const todo = this.#store[todoIndex];
    todo.edit = state;

    this.#store[todoIndex] = todo;
  }

  checkToggle(id, state) {
    const todoIndex = this.#store.findIndex((todo) => todo.Index === id);
    if (todoIndex < 0) return;
    const todo = this.#store[todoIndex];
    todo.completed = state;

    this.#store[todoIndex] = todo;
    this.#backup();
  }

  remove(id) {
    this.#store = this.#store.filter((todo) => todo.Index !== id);
    this.#backup();
  }

  edit(id, description) {
    const todoIndex = this.#store.findIndex((todo) => todo.Index === id);
    if (todoIndex < 0) return;
    const todo = this.#store[todoIndex];
    todo.description = description;

    this.#store[todoIndex] = todo;
    this.#unEdit();
    this.#backup();
  }

  clearCompleted() {
    this.#store = this.#store.filter((todo) => !todo.Completed);
    this.#backup();
  }

  #unEdit() {
    this.#store = this.#store.map((todo) => {
      todo.edit = false;
      return todo;
    });
  }
}

export default TodoStore;
