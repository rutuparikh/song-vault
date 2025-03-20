import { TaalOptions } from '../enums/Taal.js';

const SelectBox = ({value, onChange}) => {

  const keys = Object.keys(TaalOptions);

  return (
    <div>
      <select
        id="taalOptions"
        value={value}
        onChange={onChange}
        className="select-box"
      >
        <option key={`Select`} value="">Select an option</option>

        {keys.map((key) => (
          <option key={TaalOptions[key]} value={TaalOptions[key]}>{TaalOptions[key]}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectBox;
