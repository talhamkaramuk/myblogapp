import { useState, useEffect } from 'react'

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        const abortController = new AbortController();

        fetch(url, { signal: abortController.signal })
            .then(res => {
                return res.json();
            })
            .then(data => {
                setData(data);
                setIsLoading(false);
            })
            .catch((err) => {
                if (err.name === 'AbortError') {
                    console.log('Fetch aborted');
                } else {
                    setIsLoading(false);
                }
            });

        return () => abortController.abort();

    }, [url]);

    return { data, isLoading }

}

export default useFetch;