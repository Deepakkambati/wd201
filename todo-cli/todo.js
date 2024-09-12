const todoList = () => {
  let all = []; 
  const dateToday = new Date();
  const formattedDate = (d) => d.toISOString().split('T')[0];
  const today = formattedDate(dateToday); // Today's date

  const add = (todoItem) => {
    all.push(todoItem);
  };

  const markAsComplete = (index) => {
    if (all[index]) {
      all[index].completed = true;
    }
  };

  const overdue = () => {
    return all.filter(todo => todo.dueDate < today && !todo.completed);
  };

  const dueToday = () => {
    return all.filter(todo => todo.dueDate === today);
  };

  const dueLater = () => {
    return all.filter(todo => todo.dueDate > today && !todo.completed);
  };

  const toDisplayableList = (list) => {
    return list
      .map(todo => {
        const checkbox = todo.completed ? "[x]" : "[ ]";
        const displayDate = todo.dueDate === today ? "" : ` ${todo.dueDate}`;
        return `${checkbox} ${todo.title}${displayDate}`;
      })
      .join("\n");
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList
  };
};

module.exports = todoList;
