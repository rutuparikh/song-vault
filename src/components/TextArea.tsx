const TextArea = ({ placeholder, value, onChange, style}) => {
    return (
        <>
            <div className="flex">
                <textarea
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className={style}
                    spellCheck="false"
                />
            </div>
        </>
    );
}
export default TextArea;