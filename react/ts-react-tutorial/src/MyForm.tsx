import React, { useState } from 'react';

type MyFormProps = {
  onSubmit: (form: { name: string; description: string }) => void;
};

export default function MyForm({ onSubmit }: MyFormProps) {
  const [form, setForm] = useState({
    name: '',
    description: '',
  });

  const { name, description } = form;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handlesubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(form);
    setForm({
      ...form,
      name: '',
      description: '',
    });
  };

  return (
    <form onSubmit={handlesubmit}>
      <input name='name' value={name} onChange={onChange} />
      <input name='description' value={description} onChange={onChange} />
      <button type='submit'>등록</button>
    </form>
  );
}
