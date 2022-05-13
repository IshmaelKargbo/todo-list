import localStorage from '../__mocks__/localStorageMock.js';
import TodoStore from './TodoStore.js';

describe('test completed function', () => {
  const store = new TodoStore(localStorage);

  test('Add Todo 1', () => {
    const todo = 'Learn to write test 1';
    store.add(todo);

    // get store
    const storeData = store.store();
    expect(storeData).toHaveLength(1);
    expect(storeData[0].Description).toBe(todo);
  });

  test('Add Todo 2', () => {
    const todo = 'Learn to write test 2';
    store.add(todo);

    // get store
    const storeData = store.store();
    expect(storeData).toHaveLength(2);
    expect(storeData[1].Description).toBe(todo);
  });

  test('Mark Completed Todo', () => {
    let storeData = store.store();
    const currentTodo = storeData[0];
    const state = !currentTodo.Complted;
    store.checkToggle(currentTodo.Index, state);

    // get store
    storeData = store.store();
    expect(storeData).toHaveLength(2);
    expect(store.hasCompleted()).toBe(true);
  });

  test('Clear All Completed Todo', () => {
    store.clearCompleted();
    const storeData = store.store();

    expect(storeData).toHaveLength(1);
    expect(store.hasCompleted()).toBe(false);
  });
});
