class Todo {
  #index;

  #description;

  #completed;

  #edit;

  constructor(index, description, completed) {
    this.#completed = completed;
    this.#description = description;
    this.#index = index;
    this.#edit = false;
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

  get Edit() {
    return this.#edit;
  }

  set edit(value) {
    this.#edit = value;
  }

  set description(value) {
    this.#description = value;
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
