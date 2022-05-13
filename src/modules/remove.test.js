import localStorage from '../__mocks__/localStorageMock.js';
import TodoStore from './TodoStore.js';

describe('test remove function', () => {
  const store = new TodoStore(localStorage);

  const todo = 'Learn to write test';

  test('removeTodo', () => {
    store.add(todo);

    // get store
    let storeData = store.store();
    expect(storeData).toHaveLength(1);
    expect(storeData[0].Description).toBe(todo);

    const currentTodo = storeData[0];

    store.remove(currentTodo.Index);

    // get store
    storeData = store.store();
    expect(storeData).toHaveLength(0);
  });
});