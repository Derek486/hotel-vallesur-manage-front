const ButtonPrimary = ({ type, children, className = '', onClick = () => {} }) => {
    return (
        <>
            <button
                className={`py-4 h-12 flex items-center justify-center bg-gradient-to-r from-black via-boxdark to-black rounded px-6 leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] ${className}`}
                type={children}
                onClick={onClick}
            >
                {children}
            </button>
        </>
    )
}

export default ButtonPrimary