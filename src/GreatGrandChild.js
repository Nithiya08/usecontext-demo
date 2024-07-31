import { useContext } from "react"
import { NameProvider } from "./App"

function GreatGrandChild(){
    const context=useContext(NameProvider)
    return(<>
    <b>This is GreatGrandChild</b><br></br>
    <b>{context.name}</b>
    </>)
}
export default GreatGrandChild