import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    
`;

const Note = styled.div`
  background-color: #cbf0f8;
  border-radius: 8px;
  width: 240px;
  height: fit-content;
  margin: 16px;
  padding: 12px 16px;
  word-wrap: break-word;
  line-height: 1.25rem;

  &:hover {
    box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);
  }
`;

function Notes() {
  return (
    <Container>
        {[1,2,3,4,5].map(() => (
            <Note>
                Estudar: https://reactnavigation.org/docs/getting-started/
            </Note>
        ))}
    </Container>
  );
}

export default Notes;
