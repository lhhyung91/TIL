import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border-radius: 50%;
`;

export default function Button({ icon, children, onSubmit, ...rest }) {
  return <StyledButton onSubmit={onSubmit}>{children}</StyledButton>;
}
