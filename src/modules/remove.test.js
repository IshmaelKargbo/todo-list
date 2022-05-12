import localStorage from "../__mocks__/localStorageMock";
import TodoStore from "./TodoStore";

describe('test remove function', () => {
let store = new TodoStore(localStorage);

const todo = "Learn to write test";

test('removeTodo', () => {
store.add(todo);

// get store
let storeData = store.store();
expect(storeData).toHaveLength(1);
expect(storeData[0].Description).toBe('Learn to write test');

const currentTodo = storeData[0];

store.remove(currentTodo.Index);

// get store
storeData = store.store();
expect(storeData).toHaveLength(0);
});
}) 