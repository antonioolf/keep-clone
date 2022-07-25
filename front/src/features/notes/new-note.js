import { React } from 'react';
import styled from 'styled-components';
import IconButton from '../../components/IconButton';

const NewNoteContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 120px;
    width: 100%;
`;

const NewNoteTextArea = styled.div`
    /* box-shadow: 0 1px 2px 0 rgba(60,64,67,0.302),0 2px 6px 2px rgba(60,64,67,0.149); */
    
    background-color: white;
    width: 600px;
    height: 46px;
    border: solid 1px #e0e0e0;
    border-radius: 8px;
    padding: 12px 16px;
    font-size: 14px;
    color: #626262;
    font-weight: bold;

    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: text;
`;

const NewNote = () => {
    return (
        <NewNoteContainer>
            <NewNoteTextArea> 
                <div>Criar uma nota...</div>
                <div>
                    <IconButton icon="check_box" />
                    <IconButton icon="brush" />
                    <IconButton icon="image" />
                </div>
            </NewNoteTextArea>
        </NewNoteContainer>
    );
}

export { NewNote };