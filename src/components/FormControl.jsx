const FormControl = ({ id, label = null, type = 'text', name, value, placeholder, className = '', onInput = () => {}, icon = null, onInputIcon = () => {}, readonly = false }) => {
    return (
        <>
            <label htmlFor={id} className={`${!readonly && 'focus-within:text-black-2'} transition-colors text-graydark`}>
                {label}
                <div className="relative flex items-center text-graydark">
                    <input
                        id={id}
                        type={type}
                        name={name}
                        value={value}
                        onInput={onInput}
                        placeholder={placeholder}
                        className={`w-full focus:outline-none border-b-2 ${!readonly ? 'border-b-bodydark focus:text-black-2 focus:border-b-black-2' : 'text-body border-b-transparent'} bg-transparent transition-colors pt-4 pb-2 ${className}`}
                        readOnly={readonly}
                    />
                    <span className="absolute left-[90%]" onClick={onInputIcon}>{icon}</span>
                </div>
            </label>
        </>
    )
}

export default FormControl