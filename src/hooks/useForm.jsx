import { useCallback, useState } from "react"

const useForm = (initialValues = {}) => {
    const [form, setForm] = useState(initialValues)

    const handleInput = useCallback((e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    })

    return [form, handleInput]
}

export default useForm