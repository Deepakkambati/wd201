const todoList = require('../todo');
let todos;
todos = todoList();

describe("Todolist Test Suite", () => {
    test("Should add new todo", () => {
        const todoItemsCount = todos.all.length;
        todos.add({
            title: "Test todo",
            completed: false,
            dueDate: new Date().toISOString().split('T')[0] // Properly formatted date
        });
        expect(todos.all.length).toBe(todoItemsCount + 1);
    });

    test("Should mark a todo as complete", () => {
        expect(todos.all[0].completed).toBe(false);
        todos.markAsComplete(0);
        expect(todos.all[0].completed).toBe(true);
    });

    test('Should retrieve overdue items', () => {
        const dateToday = new Date();
        const formattedDate = (d) => d.toISOString().split('T')[0];
        const yesterday = formattedDate(new Date(dateToday.setDate(dateToday.getDate() - 1))); // Correct formatting
        const od = { title: 'Do Coding', dueDate: yesterday, completed: false };
        const overdueic = todos.overdue().length;
        todos.add(od);
        const overdueItems = todos.overdue();
        expect(overdueItems.length).toBe(overdueic + 1);
    });

    test('Should retrieve due today items', () => {
        const dateToday = new Date();
        const formattedDate = (d) => d.toISOString().split('T')[0];
        const today = formattedDate(dateToday); // Current date
        const todayAdd = { title: 'Do laundry', dueDate: today, completed: false };
        const duetic = todos.dueToday().length;
        todos.add(todayAdd);
        const todayItems = todos.dueToday();
        expect(todayItems.length).toBe(duetic + 1);
    });

    test('Should retrieve due later items', () => {
        const dateToday = new Date();
        const formattedDate = (d) => d.toISOString().split('T')[0];
        const tomorrow = formattedDate(new Date(dateToday.setDate(dateToday.getDate() + 1))); // Tomorrow's date
        const dl = { title: 'Return a book', dueDate: tomorrow, completed: false };
        const duelaterTodoItemsCount = todos.dueLater().length;
        todos.add(dl);
        expect(todos.dueLater().length).toBe(duelaterTodoItemsCount + 1);
    });
});
