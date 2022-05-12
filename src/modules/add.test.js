import localStorage from "../__mocks__/localStorageMock";
import TodoStore from "./TodoStore";

describe('test add function', () => {
    let store = new TodoStore(localStorage);

    const todo = "Learn to write test";

    test('addTodo', () => {
        store.add(todo);
        const storeData = store.store();
        expect(storeData).toHaveLength(1);
        expect(storeData[0].Description).toBe('Learn to write test');
    });
})