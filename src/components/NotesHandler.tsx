
const handleNotesChange = (event, setNotes) => {
    setNotes(event.target.value)
    console.log(event.target.value);
};
export default handleNotesChange;