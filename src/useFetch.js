import React from 'react'
import axios from 'axios'

//a hook is a component, bu it does not return any visual stuff (UI)
//We only return data and state
//We need to create de useEffect and call the API
//We want to reuse this useFetch Hook for many different API endPoints
//So, we pass url as parameter to useFetch where url is the desired API
//The desired state (or states) are gonna be inside this hook, 
//so we don't need to recreate them

export default function useFetch(url) {

    //states
    const [loading, setLoading] = React.useState(null)

    const [data, setData] = React.useState(false)

    const [erro, setErro] = React.useState(null)

  React.useEffect(()=>{
    setLoading(true)
    const fetchData = async()=>{
        const promise = await axios.get(url)
        try {
            setLoading(false)
            setData(promise.data)


        } catch (error) {
            setLoading(false)
            setErro(error)
        }

    }
    fetchData()
  }, [])

  return { data, loading, erro }
}
