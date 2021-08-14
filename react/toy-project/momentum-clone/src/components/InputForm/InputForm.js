import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";

const StyleForm = styled.form`
  width: auto;
  height: auto;
  position: absolute;
  bottom: 20%;
  left: 50%;
  transform: translate(-50%, -20%);
  /* text-align: center; */
  display: flex;
`;

const StyleInput = styled.input`
  width: 700px;
  height: 50px;
  border: none;
  border-bottom: 5px solid #ffffff;
  background: none;
  color: #333333;
  font-size: 50px;
  text-align: center;
  outline: none;
  text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #082766,
    0 0 82px #082766, 0 0 92px #082766, 0 0 102px #082766, 0 0 151px #082766;
  ::placeholder {
    /* color: #333333; */
    font-weight: 700;
    color: #ffffff;
    text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #082766,
      0 0 82px #082766, 0 0 92px #082766, 0 0 102px #082766, 0 0 151px #082766;
  }
`;

export default function InputForm({
  todos,
  onSubmit,
  onChange,
  value,
  ...rest
}) {
  return (
    <StyleForm onSubmit={onSubmit}>
      <StyleInput
        onChange={onChange}
        value={value}
        placeholder="뭐할건데"
      ></StyleInput>
      <Button type="submit">등록</Button>
    </StyleForm>
  );
}
