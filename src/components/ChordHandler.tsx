import { tokenValidator } from './InputValidator.tsx';

const handleChordChange = (event, setChord, error, setErrors) => {
    
    // const error = {};

    const value = event.target.value;
    setChord(value);

    const result = tokenValidator(value, "chords");

    if(result.length>0) {
        error.chord = result;
        setErrors(error);
    }
    else {
        error.chord = '';
        setErrors(error);
    }

};
export default handleChordChange;