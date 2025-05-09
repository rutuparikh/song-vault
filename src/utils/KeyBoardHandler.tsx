export const handleKeyPress = (key: string, notes: string, setNotes: (value: string) => void, cursorPos: number, setCursorPos: (value: number) => void) => {

    let newNotes = notes;
    let newCursorPos = cursorPos;

    if (key === 'Backspace') {
        if (cursorPos > 0) {
            newNotes = notes.slice(0, cursorPos - 1) + notes.slice(cursorPos);
            newCursorPos = cursorPos - 1;
        }
    } else if (key === 'space') {
        newNotes = notes.slice(0, cursorPos) + ' ' + notes.slice(cursorPos);
        newCursorPos = cursorPos + 1;
    } else {
        newNotes = notes.slice(0, cursorPos) + key + notes.slice(cursorPos);
        newCursorPos = cursorPos + key.length;
    }

    setNotes(newNotes);
    setCursorPos(newCursorPos);
};