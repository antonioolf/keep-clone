import { React, useState, useEffect } from 'react';
import { NewNote } from './newNote';
import { NoteStyle, Container, NotesContainer, EmptyNotesStyle } from './style';
import { selectNotesList } from '../../app/slices/notesSlice';
import { useSelector } from 'react-redux';
import IconButton from '../../components/IconButton';

const noteColors = ['f28b82', 'fbbc04', 'fff475', 'ccff90', 'a7ffeb', 'cbf0f8',
    'aecbfa', 'd7aefb', 'fdcfe8', 'e6c9a8', 'e8eaed', 'ffffff']

function Note(props) {
    const [bgColorIndex, setBgColorIndex] = useState(0);

    useEffect(() => {
        setBgColorIndex(() => Math.floor(Math.random() * noteColors.length));
    }, []);

    return(
        <NoteStyle bgColor={noteColors[bgColorIndex]}>
            <h4 className='title'>{props.title}</h4>
            <div>{props.text}</div>
        </NoteStyle>
    )
}

const EmptyNotes = () => {
    return (
        <EmptyNotesStyle>
            <IconButton icon="lightbulb" />
            <div>As notas adicionadas aparecem aqui</div>
        </EmptyNotesStyle>
    )
}

function Notes() {
    const notes = useSelector(selectNotesList);

    const content = notes.length > 0 ? 
        notes.map((note, index) => <Note key={index} title={note.title} text={note.text} />) : 
        <EmptyNotes />;

    return (
        <Container>
            <NewNote />
            <NotesContainer>
                { content }
            </NotesContainer>
        </Container>
    );
}

export default Notes;
