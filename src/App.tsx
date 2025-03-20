import React, { useState, useEffect, useRef } from 'react';
import './tailwind.css';

import InputBox from './components/InputBox.tsx';
import SelectBox from './components/SelectBox.tsx';
import handleLyricsChange from './components/LyricsHandler.tsx'
import handleNotesChange from './components/NotesHandler.tsx'
import handleChordChange from './components/ChordHandler.tsx'
import { TaalCount } from './enums/Taal.js';
import { chunkArray } from './components/OutputHandler.tsx';


function App() {
  const [lyrics, setLyrics] = useState('')
  const [notes, setNotes] = useState('')
  const [chord, setChord] = useState('')
  const [taal, setTaal] = useState('');

  const handleTaalChange = (event) => {
    console.log(event.target.value);
    setTaal(event.target.value);
  };

  const chunkedLyrics = chunkArray(lyrics, TaalCount[taal]);
  const chunkedNotes = chunkArray(notes, TaalCount[taal]);
  const chunkedChord = chunkArray(chord, TaalCount[taal]);

  const maxLength = Math.max(chunkedLyrics.length, chunkedNotes.length, chunkedChord.length);

  return (
    <>
      <div className="w-screen h-screen bg-gray-100 flex flex-col">
        <div className="w-screen bg-white px-8 rounded-lg shadow-lg ">

          <div className="mx-10 my-5">
            <label htmlFor="options" className="label">
              Taal:
            </label>
            <SelectBox id="taalOptions" value={taal} onChange={handleTaalChange}/>
          </div>

          <div className="mx-10 my-5">
            <label htmlFor="lyricsTextBox" className="label">
              Lyrics:
            </label>
            <InputBox id="lyricsTextBox" placeholder="Enter lyrics delimited with space" value={lyrics} onChange={(e) => handleLyricsChange(e, setLyrics)} />
          </div>

          <div className="mx-10 my-5">
            <label htmlFor="notesTextBox" className="label">
              Notes:
            </label>
            <InputBox id="notesTextBox" placeholder="Enter notes delimited with space" value={notes} onChange={(e) => handleNotesChange(e, setNotes)} />
          </div>

          <div className="mx-10 my-5">
            <label htmlFor="chordTextBox" className="label">
              Chord:
            </label>
            <InputBox id="chordTextBox" placeholder="Enter chord delimited with space" value={chord} onChange={(e) => handleChordChange(e, setChord)} />
          </div>

        </div>

        <div className="w-screen bg-white px-8 rounded-lg shadow-lg ">

          <div className="mx-10 my-5">
            
            <label htmlFor="outputBox" className="label">
              Output:
            </label>

            <div className="flex flex-wrap">
            {Array.from({ length: maxLength }).map((_, index) => (
              
              <div key={`block-${index}`} className="mb-4 p-2 rounded-md">
                <div className="print">{chunkedLyrics[index] ? chunkedLyrics[index].join(' ') : ''}</div>
                <div className="print">{chunkedNotes[index] ? chunkedNotes[index].join(' ') : ''}</div>
                <div className="print">{chunkedChord[index] ? chunkedChord[index].join(' ') : ''}</div> 
              </div>
            ))}
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default App;
