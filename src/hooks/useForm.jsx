import { useCallback, useState } from "react"

const useForm = (initialValues = {}) => {
    const [form, setForm] = useState(initialValues)

    const handleInput = useCallback((e, params) => {
        if (params) {
            setForm({
                ...form,
                [params.name]: params.value
            })
        } else {
            setForm({
                ...form,
                [e.target.name]: e.target.value
            })
        }
    })

    return [form, handleInput, setForm]
}

export default useForm