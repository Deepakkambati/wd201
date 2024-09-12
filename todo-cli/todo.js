const todoList = () => {
  const all = [];

  const add = (todo) => {
    all.push(todo);
  };

  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    const today = new Date().toLocaleDateString("en-CA");
    return all.filter(todo => todo.dueDate < today && !todo.completed);
  };

  const dueToday = () => {
    const today = new Date().toLocaleDateString("en-CA");
    return all.filter(todo => todo.dueDate === today);
  };

  const dueLater = () => {
    const today = new Date().toLocaleDateString("en-CA");
    return all.filter(todo => todo.dueDate > today);
  };

  return { all, add, markAsComplete, overdue, dueToday, dueLater };
};

module.exports = todoList;
