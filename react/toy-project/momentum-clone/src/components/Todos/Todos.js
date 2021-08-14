import React from "react";
import InputForm from "../InputForm/InputForm";

export default function Todo({ todos, onSubmit, onChange, value }) {
  return (
    <InputForm
      todos={todos}
      onSubmit={onSubmit}
      onChange={onChange}
      value={value}
    />
  );
}
