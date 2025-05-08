import fonts from '../config/fonts.json';
import { handleKeyPress } from '../utils/KeyBoardHandler.tsx';

const bhatkandeLayout = fonts.bhatkande_hindi;

const Keyboard = ({ notes, setNotes, cursorPos, setCursorPos }) => {
    return (
        <div className="flex flex-col items-center px-4 py-2">
            <div className="grid">
              {bhatkandeLayout.map((row, rowIndex) => (
                <div key={rowIndex} className="border">
                  {row.map((cell, colIndex) => (
                    <button
                      key={colIndex}
                      onClick={() => handleKeyPress(cell, notes, setNotes, cursorPos, setCursorPos)}
                      className="keyboard-keys-bhatkande"
                    >
                      {cell}
                    </button>
                  ))}
                </div>
              ))}
              <div className="flex justify-center items-center border">
                <div key="space" onClick={() => handleKeyPress("space", notes, setNotes, cursorPos, setCursorPos)} className="keyboard-keys">Space</div>
                <div key="khali" onClick={() => handleKeyPress("-", notes, setNotes, cursorPos, setCursorPos)} className="keyboard-keys-bhatkande">-</div>
                <div key="continue" onClick={() => handleKeyPress("w", notes, setNotes, cursorPos, setCursorPos)} className="keyboard-keys-bhatkande">w</div>
                <div key="dugun" onClick={() => handleKeyPress("@", notes, setNotes, cursorPos, setCursorPos)} className="keyboard-keys">2</div>
                <div key="tigun" onClick={() => handleKeyPress("#", notes, setNotes, cursorPos, setCursorPos)} className="keyboard-keys">3</div>
                <div key="chaugun" onClick={() => handleKeyPress("$", notes, setNotes, cursorPos, setCursorPos)} className="keyboard-keys">4</div>
                <div key="Backspace" onClick={() => handleKeyPress("Backspace", notes, setNotes, cursorPos, setCursorPos)} className="keyboard-keys">Backspace</div>
              </div>
            </div>
          </div>
    )
}
export default Keyboard;