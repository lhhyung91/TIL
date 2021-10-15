import React from 'react';
import styled from 'styled-components';
import { palette } from '../../styles/color';

const StyledUl = styled.ul`
  position: absolute;
  bottom: 0;
  right: 0;
  /* border: 5px solid ${palette.blue}; */
  height: 100px;
  overflow: auto;
  ::-webkit-scrollbar {
    background-color: ${palette.white};
    border-left: 2px solid ${palette.black};
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${palette.blue};
  }
`;

const StyledTodoList = styled.li`
  background-color: ${palette.white};
  width: 150px;
  padding-left: 5px;
  color: ${palette.blue};
  font-size: 1.3rem;
  /* background-color: yellowgreen; */
`;

export default function TodoList({ todos, onToggleTodo }) {
  return (
    <StyledUl>
      {todos.map(todo => (
        <StyledTodoList key={todo.id} onClick={() => onToggleTodo(todo.id)}>
          {todo.text}
        </StyledTodoList>
      ))}
    </StyledUl>
  );
}
