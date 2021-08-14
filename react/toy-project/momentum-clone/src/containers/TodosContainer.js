import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Todos from "../components/Todos/Todos";
import { addTodo, toggleTodo } from "../modules/todos";

export default function TodosContainer() {
  const [text, setText] = useState("");

  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const onCreateTodo = (text) => {
    dispatch(addTodo(text));
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onCreateTodo(text);
    setText("");
  };

  // console.log(todos);
  return (
    <Todos todos={todos} onSubmit={onSubmit} onChange={onChange} value={text} />
  );
}
