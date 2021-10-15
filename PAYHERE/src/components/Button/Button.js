import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1.3rem;
  margin-left: 2rem;
  /* background-color: #a6a6a6; */
  :hover {
    background-color: #d0d0d0;
  }
  :active {
    background-color: #a6a6a6;
  }
`;

export default function Button({ children, color, size, ...rest }) {
  return (
    <StyledButton color={color} size={size} {...rest}>
      {children}
    </StyledButton>
  );
}
