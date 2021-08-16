import React from "react";
import styled from "styled-components";

const StyledUl = styled.ul`
  background-color: red;
  position: absolute;
  bottom: 0;
  right: 0;
`;

const StyledTodoList = styled.li`
  background-color: yellowgreen;
`;

export default function TodoList({ todos, onToggleTodo }) {
  return (
    <StyledUl>
      {todos.map((todo) => (
        <StyledTodoList key={todo.id} onClick={() => onToggleTodo(todo.id)}>
          {todo.text}
        </StyledTodoList>
      ))}
    </StyledUl>
  );
}
