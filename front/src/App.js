/**
 * Integrar com Google Drive:
 * https://developers.google.com/drive/api/quickstart/js
 */


import React from 'react';
import styled from 'styled-components';
//import { Counter } from './features/counter/Counter';

import Header from './features/header/header';
import Sidebar from './features/sidebar/sidebar';
import Notes from './features/notes/notes';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Main = styled.div`
  display: flex;
  flex: 1;
`;

function App() {
  return (        
      <Container>
        <Header />
        <Main>
          <Sidebar />
          <Notes />
        </Main>
      </Container>
  );
}

export default App;
