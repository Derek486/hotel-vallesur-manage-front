const FormControl = ({ id, label = null, type = 'text', name, min, value, placeholder, className = '', onInput = () => {}, icon = null, onInputIcon = () => {}, readonly = false, error = null }) => {
    return (
        <>
            <label htmlFor={id} className={`${!readonly && 'focus-within:text-black-2'} transition-colors text-graydark ${error && '!text-danger'}`}>
                {label}
                <div className="relative flex items-center text-graydark">
                    <input
                        id={id}
                        type={type}
                        name={name}
                        value={value}
                        min={min}
                        onInput={onInput}
                        placeholder={placeholder}
                        className={`w-full focus:outline-none border-b-2 ${error && '!border-danger'} ${!readonly ? 'border-b-bodydark focus:text-black-2 focus:border-b-black-2' : 'text-body border-b-transparent'} bg-transparent transition-colors pt-4 pb-2 ${className}`}
                        readOnly={readonly}
                    />
                    <span className="absolute left-[90%]" onClick={onInputIcon}>{icon}</span>
                </div>
                {error && (
                    <p className="text-center">
                        {error}
                    </p>
                )}
            </label>
        </>
    )
}

export default FormControl