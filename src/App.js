import React from 'react';
import { useDispatch } from 'react-redux';
import { setHasScroll } from './app/slices/interfaceSlice';

import styled from 'styled-components';
import Header from './features/header/header';
import Sidebar from './features/sidebar/sidebar';
import Notes from './features/notes/notes';
import { useSizes } from './features/utils/sizes';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

const Main = styled.div`
    display: flex;
    flex: 1;
    margin-top: ${(props) => props.headerHeight};
    overflow-y: scroll;
`;

function App() {
    const dispatch = useDispatch();
    const { headerHeight } = useSizes();

    return (
        <Container>
            <Header />
            <Main onScroll={ event => dispatch(setHasScroll(event.target.scrollTop)) } headerHeight={headerHeight}>
                <Sidebar />
                <Notes />
            </Main>
        </Container>
    );
}

export default App;
