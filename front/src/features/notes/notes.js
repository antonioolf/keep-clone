import { React, useState, useEffect } from 'react';
import styled from 'styled-components';
import { sidebarWidth } from '../utils/sizes';
import { NewNote } from './new-note';

const noteColors = [
    'f28b82',
    'fbbc04',
    'fff475',
    'ccff90',
    'a7ffeb',
    'cbf0f8',
    'aecbfa',
    'd7aefb',
    'fdcfe8',
    'e6c9a8',
    'e8eaed',
    'ffffff',
]

const Container = styled.div`
    padding-left: ${sidebarWidth};
`;

const NotesContainer = styled.div`
    width: calc(100% - ${sidebarWidth}px);
    display: grid;
    gap: 16px;
    padding: 16px;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    align-content: flex-start;
`;

const NoteStyle = styled.div`
    background-color: #${props => props.bgColor};
    ${props => props.bgColor === 'ffffff' ? 'border: solid 1px #e0e0e0;' : ''};
    border-radius: 8px;
    word-wrap: break-word;
    line-height: 1.25rem;
    transition: box-shadow 0.05s ease-in;
    height: 170px;
    padding: 12px 16px;

    &:hover {
        box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);
    }
`;

function Note() {
    const [bgColorIndex, setBgColorIndex] = useState(0);

    useEffect(() => {
        setBgColorIndex(() => Math.floor(Math.random() * noteColors.length));
    }, []);

    return(
        <NoteStyle bgColor={noteColors[bgColorIndex]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec euismod, nisl eget consectetur sagittis, nisl nunc
        </NoteStyle>
    )
}

function Notes() {
    return (
        <Container>
            <NewNote />
            <NotesContainer>
                { Array.from(Array(50).keys()).map((item, index) => <Note key={index} />) }
            </NotesContainer>
        </Container>
    );
}

export default Notes;
