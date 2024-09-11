const todoList = require('../todo');
const { add , markAsComplete , all } = todoList();
describe("TodoList Test Suite", ()=>{
    beforeAll(()=>{
        add(
            {
                title:"Test Todo",
                completed : false,
                dueDate:new Date().toLocaleDateString("en-CA")
            }
        );
    })
    test("should add new todo", () => {
        const todoListItemsCount = all.length;
        add(
            {
                title:"Test Todo",
                completed : false,
                dueDate:new Date().toLocaleDateString("en-CA")
            }
        );
        expect(all.length).toBe(todoListItemsCount + 1);
    });
    test("Should mark a todo as Completed", ()=>{
        expect(all[0].completed).toBe(false);
        markAsComplete(0);
        expect(all[0].completed).toBe(true);
    })
})