import { useEffect, useState } from "react"

const useSearch = (data) => {

    const [filteredData, setFilteredData] = useState(data)
    
    useEffect(() => {
        setFilteredData([...data])
    }, [data])

    const handleSearch = (e) => {
        if (e && e.target.value) {
            let valueSearch = e.target.value.toLowerCase();
            if (valueSearch !== '') {
                setFilteredData(data.filter((item) => {
                    const { id, ...newItem } = item;
                    return Object.values(newItem).some((value) => {
                        if (value !== null && value !== undefined) {
                            return value.toString().toLowerCase().startsWith(valueSearch);
                        }
                        return false;
                    });
                }));
            }
        } else {
            setFilteredData([...data]);
        }
    };

    return [filteredData, handleSearch]
}

export default useSearch