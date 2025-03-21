import { tokenValidator } from './InputValidator.tsx';

const handleNotesChange = (event, setNotes, error, setErrors) => {

    // const error = {};

    const value = event.target.value;
    setNotes(value);

    const result = tokenValidator(value, "notes");

    if(result.length>0) {
        error.notes = result;
        setErrors(error);
    }
    else {
        error.notes = '';
        setErrors(error);
    }
};
export default handleNotesChange;