import { tokenValidator } from './InputValidator.tsx';

const handleNotesChange = (event, setNotes, error, setErrors) => {

    const value = event.target.value;
    setNotes(value);
};
export default handleNotesChange;