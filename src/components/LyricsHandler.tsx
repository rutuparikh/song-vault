
const handleLyricsChange = (event, setLyrics) => {
    setLyrics(event.target.value)
    console.log(event.target.value);
};
export default handleLyricsChange;