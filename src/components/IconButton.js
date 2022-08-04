import React from 'react';
import styled from 'styled-components';
import { mediaQueryBreakLogoType } from '../features/utils/sizes';

const Container = styled.span`
  @media(max-width: ${mediaQueryBreakLogoType}) {
    padding: 0;
  }
  padding: 12px;

  border-radius: 50%;
  cursor: pointer;
  color: #5f6368;

  &:hover {
    background-color: rgba(60,64,67,.08);
  }
`;

function IconButton(props) {
  return (
    <Container onClick={() => props.onClick()} className={`material-symbols-rounded ${props.className}`}>{ props.icon }</Container>
  );
}

export default IconButton;
