import React, { useState } from 'react';

type TodoInsertProps = {
  onInsert: (text: string) => void;
};

export default function TodoInsert({ onInsert }: TodoInsertProps) {
  const [value, setValue] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onInsert(value);
    setValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input placeholder='할 일 입력' value={value} onChange={onChange} />
      <button type='submit'>입력</button>
    </form>
  );
}
