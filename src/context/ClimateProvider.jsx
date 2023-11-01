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
    
    return(
        <ClimateContext.Provider
            value={{
                search,
                datosSearch
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