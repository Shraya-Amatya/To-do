import { useState } from "react";
import PropTypes from 'prop-types';

const AddTodo = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue) {
      addTodo(inputValue);
      setInputValue("");
      
    }
  };

  const handleChange = (value) => {
    setInputValue(value);
  };

  return (
    <form className="add-todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        placeholder="Add a new task...."
        value={inputValue}
        onChange={(e) => handleChange(e.target.value)}
      />
      <button type="submit" className="add-button">
        +
      </button>
    </form>
  );
};

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default AddTodo;


