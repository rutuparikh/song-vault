import { tokenValidator } from './InputValidator.tsx';

const handleNotesChange = (event, setKeyboardInput, error, setErrors) => {

    const value = event.target.value;
    setKeyboardInput(value);

    const result = tokenValidator(value, "notes");

    if(result.length>0) {

        const cleanedText = value.replace(new RegExp(result, 'g'), '');
        setKeyboardInput(cleanedText);

    }
    else {
        error.notes = '';
        setErrors(error);
    }
};
export default handleNotesChange;