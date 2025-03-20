
const handleChordChange = (event, setChord) => {
    setChord(event.target.value)
    console.log(event.target.value);
};
export default handleChordChange;