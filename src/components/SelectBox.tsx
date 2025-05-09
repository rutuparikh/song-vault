import taalData from '../config/taal.json';
import { chords } from '../config/constants.json';

export const TaalSelectBox = ({value, onChange}: {value:string, onChange: React.ChangeEventHandler<HTMLSelectElement>}) => {

  return (
    <div>
      <select
        id="taalOptions"
        value={value}
        onChange={onChange}
        className="select-box"
      >

        {Object.entries(taalData.taalOptions).map(([key, value]) => (
          <option key={key} value={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
};

export const ScaleSelectBox = ({value, onChange}: {value:string, onChange: React.ChangeEventHandler<HTMLSelectElement>}) => {

  return (
    <div>
      <select
        id="scaleOptions"
        value={value}
        onChange={onChange}
        className="select-box"
      >

        {chords.map((key) => (
          <option key={key} value={key}>{key}</option>
        ))}
      </select>
    </div>
  );
};