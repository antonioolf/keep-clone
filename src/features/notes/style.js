import styled from 'styled-components';
import { mediaQueryBreakLogoType, mediaQueryBreakSearch } from '../utils/sizes';

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
    width: 100%;
    max-width: 600px;
    font-size: 14px;
    color: #626262;
    padding: 12px 16px;
    border-radius: 8px;
    display: flex;
    margin-left: 15px;
    margin-right: 15px;
`;

const NewNoteIdleStyle = styled(NewNoteStyle)`
    height: 46px;
    @media(max-width: ${mediaQueryBreakLogoType}) {
        height: auto;
    }

    border: solid 1px #e0e0e0;
    font-weight: bold;
    align-items: center;
    justify-content: space-between;
    cursor: text;

    & .material-symbols-rounded {
      @media(max-width: ${mediaQueryBreakLogoType}) {
        padding: 0;
      }
    }

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

    @media(max-width: ${mediaQueryBreakSearch}) {
        flex-direction: column;
    }

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
    width: 100%;
    margin: 0 auto;
    display: grid;
    
    gap: 16px;
    padding: 16px;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

    @media(max-width: ${mediaQueryBreakSearch}) {
        grid-template-columns: 1fr 1fr;
    }

    @media(max-width: ${mediaQueryBreakLogoType}) {
        grid-template-columns: 1fr;
    }

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
    margin-top: 20px;

    & .material-symbols-rounded {
        font-size: 100px;
        color: #d7d7d7;
    }

    & .message {
        text-align: center;
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