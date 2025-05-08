import { TaalOptions } from '../enums/Taal.js';
import { chords } from '../config/constants.json';

export const TaalSelectBox = ({value, onChange}) => {

  const keys = Object.keys(TaalOptions);

  return (
    <div>
      <select
        id="taalOptions"
        value={value}
        onChange={onChange}
        className="select-box"
      >

        {keys.map((key) => (
          <option key={TaalOptions[key]} value={TaalOptions[key]}>{TaalOptions[key]}</option>
        ))}
      </select>
    </div>
  );
};

export const ScaleSelectBox = ({value, onChange}) => {

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