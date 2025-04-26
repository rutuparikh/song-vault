import React, { useState, useEffect, useRef } from 'react';

import './tailwind.css';

import TextArea from './components/TextArea.tsx';
import { ScaleSelectBox, TaalSelectBox } from './components/SelectBox.tsx';
import handleLyricsChange from './utils/LyricsHandler.tsx'
import handleNotesChange from './utils/NotesHandler.tsx'
import handleChordChange from './utils/ChordHandler.tsx'
import { TaalCount } from './enums/Taal.js';
import { chunkArray } from './utils/OutputHandler.tsx';
import { handleExport } from './utils/ExportHandler.tsx';
import InputBox from './components/InputBox.tsx';
import Keyboard from './components/KeyBoard.tsx';
import { Display } from './components/Display.tsx';


function App() {
  const [lyrics, setLyrics] = useState('')
  const [notes, setNotes] = useState('')
  const [chord, setChord] = useState('')
  const [title, setTitle] = useState('')
  const [taal, setTaal] = useState('Teen');
  const [tempo, setTempo] = useState('');
  const [scale, setScale] = useState('');
  const [errors, setErrors] = useState({ lyrics: '', notes: '', chord: '' });

  // const handleKeyDown = (e) => {
  //   const key = e.key;

  //   if (key === 'Backspace') {
  //     e.preventDefault();
  //     setNotes((notes) => notes.slice(0, -1));
  //   } else if (key === ' ') {
  //     e.preventDefault();
  //     setNotes((notes) => notes + ' ');
  //   } else if (key.length === 1) {
  //     setNotes((notes) => notes + key);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener('keydown', handleKeyDown);
  //   return () => {
  //     window.removeEventListener('keydown', handleKeyDown);
  //   };
  // }, []);

  const chunkedLyrics = chunkArray(lyrics, TaalCount[taal]);
  const chunkedNotes = chunkArray(notes, TaalCount[taal]);
  const chunkedChord = chunkArray(chord, TaalCount[taal]);

  return (
    <>
      <div className="w-screen h-screen bg-gray-100">
        <div className="w-full bg-white px-8 rounded-lg shadow-lg ">

          <div className="component-box">
            <label htmlFor="titleTextBox" className="label">
              Title:
            </label>
            <InputBox id="titleTextBox" style="input-text-box" placeholder="Enter song title" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>

          <div className="flex">

          <div className="component-box">
            <label htmlFor="options" className="label">
              Taal:
            </label>
            <TaalSelectBox id="taalOptions" value={taal} onChange={(e) => setTaal(e.target.value)} />
          </div>

          <div className="component-box">
            <label htmlFor="options" className="label">
              Scale:
            </label>
            <ScaleSelectBox id="scaleOptions" value={scale} onChange={(e) => setScale(e.target.value)} />
          </div>

          <div className="component-box">
            <label htmlFor="tempoTextBox" className="label">
              Tempo:
            </label>
            <InputBox id="tempoTextBox" style="input-text-box" placeholder="Enter tempo" value={tempo} onChange={(e) => setTempo(e.target.value)} />
          </div>

          </div>

          <div className="component-box">
            <label htmlFor="lyricsTextBox" className="label">
              Lyrics:
            </label>
            <TextArea id="lyricsTextBox" style="text-box" placeholder="Enter lyrics delimited with space" value={lyrics} onChange={(e) => handleLyricsChange(e, setLyrics)} />
          </div>

          <div className="component-box">
            <label htmlFor="notesTextBox" className="label">
              Notes:
            </label>
            <TextArea id="notesTextBox" style="text-box-notes" placeholder="Enter notes delimited with space" value={notes} onChange={(e) => handleNotesChange(e, setNotes, errors, setErrors)} />
            {errors.notes && <p className="error">{errors.notes}</p>}
          </div>


          <div className="component-box">
            <label htmlFor="chordTextBox" className="label">
              Chord:
            </label>
            <TextArea id="chordTextBox" style="text-box" placeholder="Enter chord delimited with space" value={chord} onChange={(e) => handleChordChange(e, setChord, errors, setErrors)} />
            {errors.chord && <p className="error">{errors.chord}</p>}
          </div>

          <Keyboard notes={notes} setNotes={setNotes}/>

          <div className="component-box">
            <div id="exportPdf">
              <label className="label">
                {title}
              </label>
              <label className="label-pdf">
                Taal: {taal}
              </label>
              <label className="label-pdf">
                Scale: {scale}
              </label>
              <label className="label-pdf">
                Tempo: {tempo}
              </label>

              <Display taal={taal} chunkedLyrics={chunkedLyrics} chunkedNotes={chunkedNotes} chunkedChord={chunkedChord} />

            </div>
          </div>

          <button onClick={() => handleExport('exportPdf', title)} className="button"> Export to PDF </button>

        </div>
      </div>
    </>
  )
}

export default App;
