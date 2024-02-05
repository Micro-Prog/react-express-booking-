import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";


const useFetch = (url: string) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            try {
                const res = await axios.get(url)
                    .then(function (response) { setData(response.data) });


            } catch (error: unknown) {
                if (error instanceof AxiosError) {
                    setError(error.toString());
                }
            }
            setLoading(false);
        }
        fetchData();
    }, [url]);

    // refetch function
    const reFetch = async () => {
        setLoading(false);

        try {
            const res = await axios.get(url)
            .then(function (response) { setData(response.data) });
        } catch (error: unknown) {
            if (error instanceof AxiosError) {
                setError(error.toString());
            }
        }
        setLoading(false);    
    };

    return { data, loading, error, reFetch };

}


export default useFetch;