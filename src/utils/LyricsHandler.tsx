import { ChangeEvent } from 'react';

const handleLyricsChange = (event: ChangeEvent<HTMLTextAreaElement>, setLyrics: (value: string) => void) => {
    setLyrics(event.target.value)
};
export default handleLyricsChange;