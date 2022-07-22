import React from 'react';
import styled from 'styled-components';

const Container = styled.span`
    padding: 12px;
    border-radius: 50%;
    cursor: pointer;
    color: #5f6368;

    &:hover {
        background-color: rgba(60,64,67,.08);
    }
`;

/* Valid classes:

  material-symbols-rounded
  material-symbols-outlined
  material-symbols-sharp

*/

function IconButton(props) {
  return (
    <Container onClick={() => props.onClick()} className="material-symbols-rounded">{ props.icon }</Container>
  );
}

export default IconButton;
