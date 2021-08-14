import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoList from "../components/TodoList/TodoList";
import { toggleTodo } from "../modules/todos";

export default function TodoListContainer() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const onToggleTodo = (id) => {
    dispatch(toggleTodo(id));
    console.log(id);
  };

  return <TodoList todos={todos} onToggleTodo={onToggleTodo} />;
}
