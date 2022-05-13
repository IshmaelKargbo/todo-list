import localStorage from '../__mocks__/localStorageMock.js';
import TodoStore from './TodoStore.js';

describe('test add function', () => {
  const store = new TodoStore(localStorage);

  const todo = 'Learn to write test';

  test('addTodo', () => {
    store.add(todo);
    const storeData = store.store();
    expect(storeData).toHaveLength(1);
    expect(storeData[0].Description).toBe(todo);
  });
});