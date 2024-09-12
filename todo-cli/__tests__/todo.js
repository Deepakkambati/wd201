const todoList = require('../todo');
const { add, markAsComplete, all, overdue, dueToday, dueLater } = todoList();

describe("TodoList Test Suite", () => {
  beforeAll(() => {
    // Adding initial todos for testing
    add({
      title: "Test Todo Overdue",
      completed: false,
      dueDate: new Date(new Date().setDate(new Date().getDate() - 1)).toLocaleDateString("en-CA"), // Overdue
    });
    add({
      title: "Test Todo Due Today",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"), // Due today
    });
    add({
      title: "Test Todo Due Later",
      completed: false,
      dueDate: new Date(new Date().setDate(new Date().getDate() + 1)).toLocaleDateString("en-CA"), // Due later
    });
  });

  test("should add new todo", () => {
    const todoListItemsCount = all.length;
    add({
      title: "New Test Todo",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
    expect(all.length).toBe(todoListItemsCount + 1);
  });

  test("should mark a todo as completed", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });

  test("should retrieve overdue items", () => {
    const overdueItems = overdue();
    expect(overdueItems.length).toBe(1);
    expect(overdueItems[0].title).toBe("Test Todo Overdue");
  });

  test("should retrieve due today items", () => {
    const dueTodayItems = dueToday();
    expect(dueTodayItems.length).toBe(1);
    expect(dueTodayItems[0].title).toBe("Test Todo Due Today");
  });

  test("should retrieve due later items", () => {
    const dueLaterItems = dueLater();
    expect(dueLaterItems.length).toBe(1);
    expect(dueLaterItems[0].title).toBe("Test Todo Due Later");
  });
});
