import { useState } from "react"
import useClimate from "../hooks/useClimate"

const Form = () => {

    const [alert, setAlert] = useState('')

    const{ search, datosSearch, checkClimate } = useClimate()
    
    const{ city, country } = search

    const handleSubmit = e => {
        e.preventDefault()

        if(Object.values(search).includes('')) {
            setAlert('All fields are required')
            return
        }

        checkClimate(search)
    }

    return (
        <div>
            <div className="contenedor">

                {alert && <p>{alert}</p>}

                <form
                    onSubmit={handleSubmit}
                >
                    <div className="campo">
                        <label htmlFor="city">City</label>
                        <input 
                            type="text" 
                            id="city"
                            name="city"
                            onChange={datosSearch}
                            value={city}
                        />
                    </div>

                    <div className="campo">
                        <label htmlFor="country">Country</label>
                        <select 
                            name="country" 
                            id="country"
                            onChange={datosSearch}
                            value={country}
                        >
                            <option value=""> Select a country </option>
                            <option value="US">United State</option>
                            <option value="MX">México</option>
                            <option value="AR">Argentina</option>
                            <option value="CO">Colombia</option>
                            <option value="CR">Costa Rica</option>
                            <option value="PE">Perú</option>
                            <option value="ES">España</option>
                            <option value="BR">Brasil</option>
                            <option value="CL">Chile</option>
                            <option value="PY">Paraguay</option>
                            <option value="UY">Uruguay</option>
                            <option value="IT">Italia</option>
                        </select>
                    </div>
                    <input 
                        type="submit"
                        value="Check weather" 
                    />
                </form>
            </div>
        </div>
    )
}

export default Form
