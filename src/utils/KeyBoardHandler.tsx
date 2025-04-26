export const handleKeyPress = (key, notes, setNotes) => {

    if (key === 'Backspace') {
        setNotes(notes.slice(0, -1));
    }
    else if (key === 'space') {
        setNotes(notes + ' ');
    }
    else {
        setNotes(notes + key);
    }
};