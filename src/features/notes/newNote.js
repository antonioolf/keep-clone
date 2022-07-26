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
    const dispatch = useDispatch();

    return (
        <NewNoteEditingStyle>
            <input className='title' type="text" placeholder="Título" />
            
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
                    <IconButton icon="check_box" />
                    <IconButton icon="check_box" />
                    <IconButton icon="check_box" />
                    <IconButton icon="check_box" />
                    <IconButton icon="check_box" />
                    <IconButton icon="check_box" />
                    <IconButton icon="check_box" />
                    <IconButton icon="check_box" />
                </div>

                <button 
                    className='closeButton' 
                    onClick={() => {
                        dispatch(add(noteText));
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