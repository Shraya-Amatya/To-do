const TodoList = ({ todos, deleteTask, toggleCompleted, setTodos }) => {


  const handleEditChange = (index, newText) => {
    const updatedTodos = [...todos];
    updatedTodos[index].text = newText;
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-list">
      {todos.map((todo, index) => (
        <div className="todo-item" key={index}>
          <input
            type="checkbox"
            className="check"
            checked={todo.completed}
            onChange={() => toggleCompleted(index)}
          />
          <input
            type="text"
            className={todo.completed ? "task completed" : "task"}
            value={todo.text}
            onChange={(e) => handleEditChange(index, e.target.value)}
          />
          <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
          
        </div>
      ))}
    </div>
  );
};

export default TodoList;
