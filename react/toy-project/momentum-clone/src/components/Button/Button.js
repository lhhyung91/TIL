import React from "react";
import styled, { css } from "styled-components";
import { palette } from "../../styles/color";

const StyledButton = styled.button`
  /* 기본 스타일*/
  display: inline-flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  border-radius: 4px;
  color: ${palette.black};
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;

  :hover {
    background-color: ${palette.gray};
  }

  :active {
    background-color: ${palette.darkgray};
    color: ${palette.pink};
  }

  /* 기타 */
`;

export default function Button({
  children,
  color,
  size,
  outline,
  fullWidth,
  ...rest
}) {
  return (
    <StyledButton color={color} size={size} {...rest}>
      {children}
    </StyledButton>
  );
}
