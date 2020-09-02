import React, { useState } from "react";

import "./NewTodoForm.css";

function NewTodoForm() {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className='new-todo-form'>
      <input
        className='new-todo-input'
        type='text'
        placeholder='Add your new todo here'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        required
      />
      <button className='new-todo-button'>Create Todo</button>
    </div>
  );
}

export default NewTodoForm;
