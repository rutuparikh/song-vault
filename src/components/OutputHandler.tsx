import { TaalCount } from '../enums/Taal.js';
import { useEffect } from 'react';

// const mergeText = (lyrics, notes, chord, taal) => {

//     lyrics = processLyrics(lyrics, taal);

//     const lyricsChunk = chunkArray(lyrics, TaalCount[taal]);

//     console.log("lyricsChunk" + lyricsChunk);

//     notes = processNotes(notes, taal);

//     chord = processChord(chord, taal);


//     return [lyricsChunk, notes, chord];
// };
// export default mergeText;

// const processLyrics = (lyrics, taal) => {

//     const splitLyrics = lyrics.trim() ? lyrics.split(' ') : [];
//     return splitLyrics;
// }

// const processNotes = (notes, taal) => {

//     const splitNotes = notes.trim() ? notes.split(' ') : [];
//     return splitNotes;
// }

// const processChord = (chord, taal) => {

//     const splitChord = chord.trim() ? chord.split(' ') : [];
//     return splitChord;
// }

export const chunkArray = (text, size) => {

    const splitText = text.trim() ? text.split(' ') : [];

    const chunks = [];
    for (let i = 0; i < splitText.length; i += size) {
        chunks.push(splitText.slice(i, i + size));
    }
    console.log(chunks);
    return chunks;
};