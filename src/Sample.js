import { useContext } from "react"
import { NameProvider } from "./App"

function Sample({children}){
    let context=useContext(NameProvider)
    return(<>
    <div style={{'color':context.color}}>
    {children} <br></br>
    <b >Sample Text</b>
    </div>
    </>)
}
export default Sample