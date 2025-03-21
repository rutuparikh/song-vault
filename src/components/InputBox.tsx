const InputBox = ({ placeholder, value, onChange, style}) => {
    return (
        <>
            <div className="flex">
                <textarea
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className={style}
                />
            </div>
        </>
    );
}
export default InputBox;