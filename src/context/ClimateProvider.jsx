import { useState, createContext } from "react";

const ClimateContext = createContext()
const ClimateProvider = ({children}) => {


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

    const checkClimate = datos => {
        console.log(datos)
    }
    
    return(
        <ClimateContext.Provider
            value={{
                search,
                datosSearch,
                checkClimate
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