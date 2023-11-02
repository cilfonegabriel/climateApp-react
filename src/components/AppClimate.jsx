import Form from "./Form"
import Result from "./Result"
import Loading from "./Loading"
import useClimate from "../hooks/useClimate"

const AppClimate = () => {

  const { result, loading, noResult } = useClimate()

  return (
    <>
        <main className="dos-columnas">
            <Form />
            { 
              loading ? <Loading /> :
              result?.name ? <Result /> :
              noResult ? <p>{noResult}</p>
              : <p>The weather is going to be shown here</p>
            }
            
        </main>
    </>
  )
}

export default AppClimate

