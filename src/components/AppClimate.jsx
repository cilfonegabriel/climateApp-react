import Form from "./Form"
import Result from "./Result"
import useClimate from "../hooks/useClimate"

const AppClimate = () => {

  const { result } = useClimate()

  return (
    <>
        <main className="dos-columnas">
            <Form />
            {result?.name && <Result />}
            
        </main>
    </>
  )
}

export default AppClimate

