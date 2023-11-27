const FormControl = ({ id, label = null, type = 'text', name, value, onInput, icon = null, onInputIcon }) => {
    return (
        <>
            <label htmlFor={id} className="focus-within:font-medium transition-colors">
                {label}
                <div className="relative flex items-center text-graydark">
                    <input
                        id={id}
                        type={type}
                        name={name}
                        value={value}
                        onInput={onInput}
                        className="mb-4 w-full border-b-2 bg-transparent border-b-bodydark transition-colors focus:outline-none focus:text-black-2 focus:border-b-black-2 pt-4 pb-2"
                    />
                    <span className="absolute left-[90%]" onClick={onInputIcon}>{icon}</span>
                </div>
            </label>
        </>
    )
}

export default FormControl