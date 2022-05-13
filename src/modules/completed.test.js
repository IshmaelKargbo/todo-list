import localStorage from '../__mocks__/localStorageMock.js';
import TodoStore from './TodoStore.js';

describe('test completed function', () => {
  const store = new TodoStore(localStorage);

  test('Add Todo', () => {
    const todo = 'Learn to write test';
    store.add(todo);

    // get store
    const storeData = store.store();
    expect(storeData).toHaveLength(1);
    expect(storeData[0].Description).toBe(todo);
  });

  test('Mark Completed Todo', () => {
    let storeData = store.store();
    const currentTodo = storeData[0];
    const state = !currentTodo.Complted;
    store.checkToggle(currentTodo.Index, state);

    // get store
    storeData = store.store();
    expect(storeData).toHaveLength(1);
    expect(store.hasCompleted()).toBe(true);
  });
});