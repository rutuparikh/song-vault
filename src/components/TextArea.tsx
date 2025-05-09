const TextArea = ({ placeholder, value, onChange, style, onSelect}: { placeholder:string, value:string , onChange:React.ChangeEventHandler<HTMLTextAreaElement>, style:string, onSelect:React.ReactEventHandler<HTMLTextAreaElement>}) => {
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