import { React, useState } from 'react';
import IconButton from '../../components/IconButton';
import { NewNoteContainer, NewNoteIdleStyle, NewNoteEditingStyle, BottomButtons } from './style.js'
import { add } from '../../app/slices/notesSlice';
import { useDispatch } from 'react-redux';

const NewNoteIdle = (props) => {
    return (
        <NewNoteIdleStyle onClick={() => props.setIsEditing(true)}>
            <div>Criar uma nota...</div>
            <div>
                <IconButton icon="check_box" />
                <IconButton icon="brush" />
                <IconButton icon="image" />
            </div>
        </NewNoteIdleStyle>
    );
}

const NewNoteEditing = (props) => {
    const [noteText, setNoteText] = useState('');
    const [noteTitle, setNoteTitle] = useState('');
    const dispatch = useDispatch();

    return (
        <NewNoteEditingStyle>
            <input 
                className='title' 
                type="text"
                placeholder="Título"
                onChange={(e) => {
                    setNoteTitle(e.target.value)
                }}  
            />
            
            <textarea 
                autoFocus={true}
                className='noteContent' 
                placeholder="Escreva sua nota..." 
                onChange={(e) => {
                    setNoteText(e.target.value)
                }} 
            />

            <BottomButtons>
                <div>
                    <IconButton icon="add_alert" />
                    <IconButton icon="person_add" />
                    <IconButton icon="palette" />
                    <IconButton icon="image" />
                    <IconButton icon="archive" />
                    <IconButton icon="more_vert" />
                    <IconButton icon="undo" />
                    <IconButton icon="redo" />
                </div>

                <button 
                    className='closeButton' 
                    onClick={() => {
                        if (noteText.length > 0 || noteTitle.length > 0) {
                            dispatch(add({ noteTitle, noteText }));    
                        }
                        setNoteText('');
                        props.setIsEditing(false)
                    }}
                >
                    Fechar
                </button>
            </BottomButtons>
        </NewNoteEditingStyle>
    );
}

const NewNote = () => {
    const [isEditing, setIsEditing] = useState(false);

    return (
        <NewNoteContainer>{
            isEditing  ? 
                <NewNoteEditing setIsEditing={setIsEditing} /> :
                <NewNoteIdle setIsEditing={setIsEditing} />
        }</NewNoteContainer>
    );
}

export { NewNote };