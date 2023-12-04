const SelectControl = ({ id, label = null, name, value, placeholder, className = '', options = [], onInput = () => {}, icon = null, onInputIcon = () => {}, disabled = false }) => {
    return (
        <>
            <label htmlFor={id} className={`${!disabled && 'focus-within:text-black-2'} transition-colors text-graydark`}>
                {label}
                <div className="relative flex items-center text-graydark">
                    <select
                        id={id}
                        name={name}
                        value={value}
                        onInput={onInput}
                        placeholder={placeholder}
                        className={`w-full focus:outline-none border-b-2 ${!disabled ? 'border-b-bodydark focus:text-black-2 focus:border-b-black-2' : 'text-body border-b-transparent'} bg-transparent transition-colors pt-4 pb-2 ${className}`}
                        disabled={disabled}
                    >   
                        {/* Opciones en formato { text: value } */}
                        {options.map(o => {
                            const object = Object.entries(o)[0]
                            return <option key={object[0]} value={object[0]}>{object[1]}</option>
                        })}
                    </select>
                    <span className="absolute left-[90%]" onClick={onInputIcon}>{icon}</span>
                </div>
            </label>
        </>
    )
}

export default SelectControl