const TextArea = ({ placeholder, value, onChange, style, onSelect}) => {
    return (
        <>
            <div className="flex">
                <textarea
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className={style}
                    spellCheck="false"
                    onSelect={onSelect}
                />
            </div>
        </>
    );
}
export default TextArea;