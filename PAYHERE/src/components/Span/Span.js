import React from 'react';
import styled from 'styled-components';

const StyledSpan = styled.span`
  display: inline-block;
  font-size: 1.5rem;
  margin: 5px 0;
`;

export default function Span({ children }) {
  return <StyledSpan>{children}</StyledSpan>;
}
