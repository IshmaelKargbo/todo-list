import localStorage from '../__mocks__/localStorageMock.js';
import TodoStore from './TodoStore.js';

describe('test update function', () => {
  const store = new TodoStore(localStorage);


  test('Add Todo', () => {
    const todo = 'Learn to write test';
    store.add(todo);

    // get store
    const storeData = store.store();
    expect(storeData).toHaveLength(1);
    expect(storeData[0].Description).toBe(todo);
  });

  test('Edit Todo', () => {
    const editTodo = 'Learn to write test by editing a todo';
    let storeData = store.store();
    const currentTodo = storeData[0];
    store.edit(currentTodo.Index, editTodo);

    // get store
    storeData = store.store();
    expect(storeData).toHaveLength(1);
    expect(storeData[0].Description).toBe(editTodo);
  });
});