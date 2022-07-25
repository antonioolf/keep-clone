import { React, useState, useEffect } from 'react';
import { NewNote } from './newNote';
import { NoteStyle, Container, NotesContainer } from './style';
import { selectNotesList } from '../../app/slices/notesSlice';
import { useSelector } from 'react-redux';

const noteColors = ['f28b82', 'fbbc04', 'fff475', 'ccff90', 'a7ffeb', 'cbf0f8',
    'aecbfa', 'd7aefb', 'fdcfe8', 'e6c9a8', 'e8eaed', 'ffffff']

function Note(props) {
    const [bgColorIndex, setBgColorIndex] = useState(0);

    useEffect(() => {
        setBgColorIndex(() => Math.floor(Math.random() * noteColors.length));
    }, []);

    return(
        <NoteStyle bgColor={noteColors[bgColorIndex]}>
            {props.title}
        </NoteStyle>
    )
}

function Notes() {
    const notes = useSelector(selectNotesList);

    return (
        <Container>
            <NewNote />
            <NotesContainer>
                { notes.map((noteObj, index) => <Note key={index} title={noteObj.title} />) }
                {/* { Array.from(Array(50).keys()).map((item, index) => <Note key={index} />) } */}
            </NotesContainer>
        </Container>
    );
}

export default Notes;
