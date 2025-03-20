const InputBox = ({ placeholder, value, onChange}) => {
    return (
        <>
            <div>
                <input
                    type="text"
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className="input-box grid-cols-auto"
                />
            </div>
        </>
    );
}
export default InputBox;