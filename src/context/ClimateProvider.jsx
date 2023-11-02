import { useState, createContext } from "react";
import axios from "axios";

const ClimateContext = createContext()
const ClimateProvider = ({children}) => {

    const [result, setResult] = useState({})
    const [loading, setLoading] = useState(false)
    const [noResult, setNoResult] = useState(false)

    const [search, setSearch] = useState({
        city: '',
        country: '',
    })

    const datosSearch = e => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    }

    const checkClimate = async datos => {
        setLoading(true)
        setNoResult(false)
        try {
            const { city, country } = datos
            const appId = import.meta.env.VITE_API_KEY

            const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&limit=1&appid=${appId}`
            const { data } = await axios(url)
            const { lat, lon } = data[0]

            const urlClimate = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`

            const { data: climate } = await axios(urlClimate)
            setResult(climate)

        } catch (err) {
            setNoResult('There not results')
        } finally {
            setLoading(false)
        }
    }
    
    return(
        <ClimateContext.Provider
            value={{
                search,
                datosSearch,
                checkClimate,
                result,
                loading,
                noResult
            }}
        >
            {children}
        </ClimateContext.Provider>

    )
}

export {
    ClimateProvider
}

export default ClimateContext