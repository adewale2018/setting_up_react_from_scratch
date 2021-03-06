import React from "react";
import { connect } from "react-redux";

import TodoListItem from "./TodoListItem";
import NewTodoForm from "./NewTodoForm";
import "./TodoList.css";
import { removeTodo } from "./actions";

function TodoList({ todos = [], onRemovePressed }) {
  return (
    <div className='list-wrapper'>
      <NewTodoForm />
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          onRemovePressed={onRemovePressed}
          key={todo.text}
        />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (text) => dispatch(removeTodo(text)),
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
