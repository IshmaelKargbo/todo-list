import Todo from './todo.js';

class TodoStore {
  #store = [];

  constructor() {
    this.#init();
  }

  #init() {
    const data = localStorage.getItem('todo-store');
    const store = JSON.parse(data);

    if (!store) return;

    this.#store = store.map(
      (todo) => new Todo(todo.index, todo.description, todo.completed),
    );
  }

  #backup() {
    const storeData = this.#store.map((e) => e.data());
    localStorage.setItem('todo-store', JSON.stringify(storeData));
  }

  store() {
    return this.#store;
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

  #unEdit() {
    this.#store = this.#store.map((todo) => {
      todo.edit = false;
      return todo;
    });
  }
}

export default TodoStore;
