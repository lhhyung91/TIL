import React from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';

export default function SearchForm({
  onSubmit,
  onSearchInputValue,
  onSearchInputChange,
  label,
  type,
  name,
  text,
  placeholder,
  value,
}) {
  return (
    <form onSubmit={onSubmit}>
      <Input
        label={label}
        value={value}
        id={text}
        name={name}
        type={type}
        placeholder={placeholder}
        onSearchInputChange={onSearchInputChange}
      ></Input>

      <Button type='submit' onClick={onSearchInputValue}>
        SEARCH
      </Button>
    </form>
  );
}
