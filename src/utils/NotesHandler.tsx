import { ChangeEvent } from 'react';

const handleNotesChange = (event: ChangeEvent<HTMLTextAreaElement>,
    setNotes: (value: string) => void) => {

    const value = event.target.value;
    setNotes(value);
};
export default handleNotesChange;