import  { useState, useEffect } from "react";
import AddTodo from "../components/Addtodo/Addtodo";
import TodoList from "../components/Todolist/Todolist";
import "../App.css";

const TodoApp = () => {
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (newTodo) => {
    setTodos([...todos, { text: newTodo }]);
  };

  const deleteTask = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const toggleCompleted = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed      ;
    setTodos(updatedTodos);
  };

  return (
    <div className="container">
      <h1 className="title">Todo List</h1>
      <AddTodo addTodo={addTodo} />
      <TodoList
        todos={todos}
        deleteTask={deleteTask}
        toggleCompleted={toggleCompleted}
        setTodos={setTodos} 
      />
    </div>
  );
};

export default TodoApp;
