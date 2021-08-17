import React, { useEffect } from "react";
// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoList from "../components/TodoList/TodoList";
import { toggleTodo } from "../modules/todos";

export default function TodosListContainer() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  // const [storageData, setStorageData] = useState(null);

  // const onGetStorageData = () => {
  //   window.sessionStorage.getItem("todos");
  // };

  const onToggleTodo = (id) => {
    dispatch(toggleTodo(id));
    console.log(id);
  };

  // useEffect(() => {
  //   onGetStorageData();
  // }, []);

  // console.log(window.sessionStorage.getItem("todos"));

  return (
    /* {storageData.map((data) => (
        <div>
          <p>{data.id}</p>
          <p>{data.text}</p>
        </div>
      ))} */
    <TodoList todos={todos} onToggleTodo={onToggleTodo} />
  );
}
