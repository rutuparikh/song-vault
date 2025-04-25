import React, { useState, useEffect, useRef } from 'react';
import fonts from './config/fonts.json';

import './tailwind.css';

import TextArea from './components/TextArea.tsx';
import SelectBox from './components/SelectBox.tsx';
import handleLyricsChange from './components/LyricsHandler.tsx'
import handleNotesChange from './components/NotesHandler.tsx'
import handleChordChange from './components/ChordHandler.tsx'
import { TaalCount } from './enums/Taal.js';
import { chunkArray } from './components/OutputHandler.tsx';
import { handleExport } from './utils/ExportHandler.tsx';
import InputBox from './components/InputBox.tsx';



function App() {
  const [lyrics, setLyrics] = useState('')
  const [notes, setNotes] = useState('')
  const [chord, setChord] = useState('')
  const [title, setTitle] = useState('')
  const [taal, setTaal] = useState('Teen');
  const [errors, setErrors] = useState({ lyrics: '', notes: '', chord: '' });

  const handleTaalChange = (event) => {
    setTaal(event.target.value);
  };

  const handleKeyPress = (key) => {
    if (key == 'Backspace') {
      setNotes(notes.slice(0, -1));
    }
    else if (key == 'space') {
      setNotes(notes + ' ');
    }
    else {
      setNotes(notes + key);
    }
  };

  const bhatkandeLayout = fonts.bhatkande_hindi;


  const chunkedLyrics = chunkArray(lyrics, TaalCount[taal]);
  const chunkedNotes = chunkArray(notes, TaalCount[taal]);
  const chunkedChord = chunkArray(chord, TaalCount[taal]);

  const maxLength = Math.max(chunkedLyrics.length, chunkedNotes.length, chunkedChord.length);

  return (
    <>
      <div className="w-screen h-screen bg-gray-100">
        <div className="w-full bg-white px-8 rounded-lg shadow-lg ">

          <div className="mx-10 my-5">
            <label htmlFor="titleTextBox" className="label">
              Title:
            </label>
            <InputBox id="titleTextBox" style="input-text-box" placeholder="Enter song title" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>

          <div className="mx-10 my-5">
            <label htmlFor="options" className="label">
              Taal:
            </label>
            <SelectBox id="taalOptions" value={taal} onChange={handleTaalChange} />
          </div>

          <div className="mx-10 my-5">
            <label htmlFor="lyricsTextBox" className="label">
              Lyrics:
            </label>
            <TextArea id="lyricsTextBox" style="text-box" placeholder="Enter lyrics delimited with space" value={lyrics} onChange={(e) => handleLyricsChange(e, setLyrics)} />
          </div>

          <div className="mx-10 my-5">
            <label htmlFor="notesTextBox" className="label">
              Notes:
            </label>
            <TextArea id="notesTextBox" style="text-box-notes" placeholder="Enter notes delimited with space" value={notes} onChange={(e) => handleNotesChange(e, setNotes, errors, setErrors)} />
            {errors.notes && <p className="error">{errors.notes}</p>}
          </div>


          <div className="mx-10 my-5">
            <label htmlFor="chordTextBox" className="label">
              Chord:
            </label>
            <TextArea id="chordTextBox" style="text-box" placeholder="Enter chord delimited with space" value={chord} onChange={(e) => handleChordChange(e, setChord, errors, setErrors)} />
            {errors.chord && <p className="error">{errors.chord}</p>}
          </div>

          <div className="flex flex-col items-center px-4 py-2">
            <div className="grid">
              {bhatkandeLayout.map((row, rowIndex) => (
                <div key={rowIndex} className="border">
                  {row.map((cell, colIndex) => (
                    <button
                      key={colIndex}
                      onClick={() => handleKeyPress(cell)}
                      className="keyboard-keys-bhatkande"
                    >
                      {cell}
                    </button>
                  ))}
                </div>
              ))}
              <div className="flex justify-center items-center border">
                <div key="space" onClick={() => handleKeyPress("space")} className="keyboard-keys">Space</div>
                <div key="khali" onClick={() => handleKeyPress("-")} className="keyboard-keys-bhatkande">-</div>
                <div key="continue" onClick={() => handleKeyPress("w")} className="keyboard-keys-bhatkande">w</div>
                <div key="dugun" onClick={() => handleKeyPress("@")} className="keyboard-keys">2</div>
                <div key="tigun" onClick={() => handleKeyPress("#")} className="keyboard-keys">3</div>
                <div key="chaugun" onClick={() => handleKeyPress("$")} className="keyboard-keys">4</div>
                <div key="Backspace" onClick={() => handleKeyPress("Backspace")} className="keyboard-keys">Backspace</div>
              </div>
            </div>
          </div>

          <div className="mx-10 my-5">
            <div id="exportPdf">
              <label className="label">
                {title}
              </label>

              <div className="mt-6 flex flex-wrap">

                {Array.from({ length: maxLength }).map((_, index) => (

                  <div key={`block-${index}`} className="mb-6 pr-4 rounded-md">

                    <div className="flex">
                      {Array.from({ length: TaalCount[taal] }).map((_, cell) => (

                        <>
                          <div className="flex border">
                            {Array.from({ length: 1 }).map((_, i) => (
                              <div>
                                <div className="print">{chunkedLyrics[index] && chunkedLyrics[index][cell] ? chunkedLyrics[index][cell] : ''}</div>
                                <div className="print-notes">{chunkedNotes[index] && chunkedNotes[index][cell] ? chunkedNotes[index][cell] : ''}</div>
                                <div className="print">{chunkedChord[index] && chunkedChord[index][cell] ? chunkedChord[index][cell] : ''}</div>
                              </div>
                            ))}
                          </div>
                        </>

                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button onClick={() => handleExport('exportPdf', title)} className="button"> Export to PDF </button>

        </div>
      </div>
    </>
  )
}

export default App;
