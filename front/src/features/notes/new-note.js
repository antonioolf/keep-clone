import { React, useState } from 'react';
import styled from 'styled-components';
import IconButton from '../../components/IconButton';

const NewNoteContainer = styled.div`
    display: flex;
    padding-top: 32px;
    padding-bottom: 25px;
    justify-content: center;
    min-height: 120px;
    width: 100%;
`;

const NewNoteStyle = styled.div`
    box-shadow: 0 1px 2px 0 rgba(60,64,67,0.302),0 2px 6px 2px rgba(60,64,67,0.149);
    background-color: white;
    width: 600px;
    font-size: 14px;
    color: #626262;
    padding: 12px 16px;
    border-radius: 8px;
    display: flex;
`;

const NewNoteIdleStyle = styled(NewNoteStyle)`
    height: 46px;
    border: solid 1px #e0e0e0;
    font-weight: bold;

    align-items: center;
    justify-content: space-between;
    cursor: text;
`;


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


const NewNoteEditingStyle = styled(NewNoteStyle)`
    flex-direction: column;

    & > .title {
        min-height: 43px;
        font-size: 1rem;
        font-weight: bold;
        border: none;
    }

    & > .noteContent {
        min-height: 46px;
        font-size: .875rem;
        border: none;
    }

    & > .noteContent:focus-visible, & > .title:focus-visible {
        outline: none;
    }
`;

const BottomButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    & .closeButton {
        height: 36px;
        padding: 8px 24px;
        -webkit-border-radius: 4px;
        border-radius: 4px;

        background-color: white;
        border: none;
        color: rgba(0,0,0,.87);
        font-weight: bold;
    }

    & .closeButton:hover {
        background-color: rgba(95,99,104,0.039);
    }

    & .closeButton:active {
        background-color: rgba(95,99,104,0.161)!important;
    }
`;

const NewNoteEditing = (props) => {
    const [userTyped, setUserTyped] = useState(false);

    return (
        <NewNoteEditingStyle>
            <input className='title' type="text" placeholder="Título" />
            
            <div 
                className='noteContent' 
                contentEditable='true' 
                onInput={(e) => {
                    setUserTyped(true);
                }}
                onClick={(e) => {
                    if (!userTyped) {
                        e.currentTarget.textContent = '';
                    }
                }}
            >
                Text inside div
            </div>

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

                <button className='closeButton' onClick={() => props.setIsEditing(false)}>Fechar</button>
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