import { tokenValidator } from './InputValidator.tsx';

const handleNotesChange = (event, setNotes, error, setErrors) => {

    const value = event.target.value;
    setNotes(value);

    console.log("Notes"+ value);

    const result = tokenValidator(value, "notes");

    if(result.length>0) {

        const cleanedText = value.replace(new RegExp(result, 'g'), '');
        setNotes(cleanedText);

    }
    else {
        error.notes = '';
        setErrors(error);
    }
};
export default handleNotesChange;