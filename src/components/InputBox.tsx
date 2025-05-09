const InputBox = ({ placeholder, value, onChange, style}: {placeholder:string, value:string, onChange:React.ChangeEventHandler<HTMLInputElement>, style:string}) => {
    return (
        <>
            <div className="flex">
                <input 
                    type="text"
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
export default InputBox;