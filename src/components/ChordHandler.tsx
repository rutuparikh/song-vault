import { tokenValidator } from './InputValidator.tsx';

const handleChordChange = (event, setChord, error, setErrors) => {

    const value = event.target.value;
    setChord(value);

    const result = tokenValidator(value, "chords");

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