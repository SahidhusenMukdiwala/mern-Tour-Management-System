import { useState, useEffect } from "react";


const useFetch = (url) => {
    const [data, SetData] = useState([])
    const [error, SetError] = useState(null)
    const [loading, SetLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            SetLoading(true)
            try {
                const res = await fetch(url)
                if (!res.ok) {
                    SetError('Failed to fetch')
                }
                const result = await res.json()
                SetData(result.data)
                SetLoading(false)

            } catch (error) {
                SetError(error.message)
                SetLoading(false)
            }
        }

        fetchData()
    }, [url])


    return {
        data, error, loading
    }

}


export default useFetch;