class Todo {
  #index;
  #description;
  #completed;

  constructor(index, description, completed) {
    this.#completed = completed;
    this.#description = description;
    this.#index = index;
  }

  get Index() {
    return this.#index;
  }

  get Description() {
    return this.#description;
  }

  get Completed() {
    return this.#completed;
  }

  data() {
    return {
      index: this.#index,
      description: this.#description,
      completed: this.#completed,
    };
  }
}

export default Todo;
