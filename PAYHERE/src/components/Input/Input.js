import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  width: 300px;
  height: 40px;
  font-size: 1.2rem;
  ::-webkit-input-placeholder {
    font-size: 1rem;
  }
`;

export default function Input({
  label,
  text,
  name,
  value,
  type,
  placeholder,
  onSearchInputChange,
  ...rest
}) {
  return (
    <StyledInput
      label={label}
      id={text}
      name={name}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onSearchInputChange}
      {...rest}
    ></StyledInput>
  );
}
