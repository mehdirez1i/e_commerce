import { useState, useEffect } from "react";

export const useFetch = (url, method= 'GET') => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [options, setOptions] = useState(null)

    const postData = (postData)=>{
        setOptions({
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(postData)
        })
        
    }


    useEffect(() => {
        const fetchData = async (options) => {
       
            setIsLoading(true)

            try {
                const response = await fetch(url,{...options})
                console.log(response)
                if(!response.ok){
                    throw new Error(response.statusText)
                }
                const json = await response.json()
                console.log(json)
                setIsLoading(false)

                setData(json)
                setError(null)
            } catch (err) {
                setData(null)
                setIsLoading(false)
                setError(err.message)
            }
        }
        if( method === 'GET'){
            fetchData()
        }
        if(method === 'POST' && options){
             fetchData(options)
        }
    }, [url, method, options])

    return {data, isLoading, error, postData}
}