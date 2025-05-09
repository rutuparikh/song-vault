import { tokenValidator } from './InputValidator.tsx';
import { ChangeEvent } from 'react';

const handleChordChange = (event: ChangeEvent<HTMLTextAreaElement>, setChord: (value: string) => void, error: { lyrics: string; notes: string; chord: string }, setErrors: (value: { lyrics: string; notes: string; chord: string }) => void) => {

    const value = event.target.value;
    setChord(value);

    const result = tokenValidator(value);

    if(result.length>0) {
        error.chord = `Invalid value: ${result}`;
        setErrors(error);
    }
    else {
        error.chord = '';
        setErrors(error);
    }

};
export default handleChordChange;