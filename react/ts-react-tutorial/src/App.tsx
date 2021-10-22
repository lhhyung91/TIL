import React from 'react';
import Counter from './Counter';
import MyForm from './MyForm';
import ReducerSample from './ReducerSample';

function App() {
  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };
  return (
    <div>
      <MyForm onSubmit={onSubmit} />
      <Counter />
      <ReducerSample />
    </div>
  );
}

export default App;
