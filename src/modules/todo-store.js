import Todo from "./todo";

class TodoStore {
  #store = [];

  constructor() {
    this.#init();
  }

  #init() {
    try {
      const data = localStorage.getItem("todo-store");
      const store = JSON.parse(data);


      this.#store = store.map(
        (todo) => new Todo(todo.index, todo.description, todo.completed)
      );
    } catch (error) {
      return;
    }
  }

  #backup() {
      const storeData = this.#store.map(e => e.data());
      localStorage.setItem("todo-store", JSON.stringify(storeData));
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

}

export default TodoStore;