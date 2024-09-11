const todoList = () => {
    let all = [];
    
    const add = (todoItem) => {
      all.push(todoItem);
    };
    
    const markAsComplete = (index) => {
      all[index].completed = true;
    };
    
    const overdue = () => {
      return all.filter(todo => todo.dueDate < today);
    };
    
    const dueToday = () => {
      return all.filter(todo => todo.dueDate === today);
    };
    
    const dueLater = () => {
      return all.filter(todo => todo.dueDate > today);
    };
    
    const toDisplayableList = (list) => {
      return list.map(todo => {
        const completionStatus = todo.completed ? "[x]" : "[ ]";
        const displayDate = todo.dueDate === today ? "" : todo.dueDate;
        return `${completionStatus} ${todo.title} ${displayDate}`.trim();
      }).join("\n");
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
  
  // ####################################### #
  // DO NOT CHANGE ANYTHING BELOW THIS LINE. #
  // ####################################### #
module.exports = todoList;