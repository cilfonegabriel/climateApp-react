import { useState, createContext } from "react";
import axios from "axios";

const ClimateContext = createContext()
const ClimateProvider = ({children}) => {

    const [result, setResult] = useState({})

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
            console.error(err)
        }
    }
    
    return(
        <ClimateContext.Provider
            value={{
                search,
                datosSearch,
                checkClimate,
                result
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