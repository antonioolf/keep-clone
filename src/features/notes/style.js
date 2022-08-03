import styled from 'styled-components';

const NewNoteContainer = styled.div`
    display: flex;
    flex: 1;
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
        resize: vertical;
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
        background-color: rgba(95,99,104,0.161) !important;
    }
`;

const Container = styled.div`
    padding-left: ${props => props.sidebarWidth};
    flex: 1;
`;

const NotesContainer = styled.div`
    background-color: blue;
    width: 100%;
    margin: 0 auto;
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

    & > .title {
        margin-bottom: 12px;
    }
`;

const EmptyNotesStyle = styled.div`
    grid-column: 1 / -1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 1.375rem;
    color: #80868b;
    margin-top: 110px;

    & .material-symbols-rounded {
        font-size: 100px;
        color: #d7d7d7;
    }
`;

export {
    NewNoteContainer, 
    NewNoteIdleStyle,
    NewNoteEditingStyle,
    BottomButtons,
    Container,
    NotesContainer,
    NoteStyle,
    EmptyNotesStyle
};