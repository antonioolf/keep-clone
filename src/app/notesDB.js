const getNotes = () => {
    const notes = localStorage.getItem('notesDB');
    return notes ? JSON.parse(notes) : [];
}

const saveNote = (noteTitle, noteText) => {
    const notesArray = getNotes();
    const noteObj = {
        title: noteTitle,
        text: noteText
    }

    notesArray.push(noteObj);
    localStorage.setItem('notesDB', JSON.stringify(notesArray));
}

export { saveNote, getNotes };