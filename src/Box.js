import { useContext } from "react"
import { NameProvider } from "./App"

function Box({children}){
    let context=useContext(NameProvider)
    return(<>
    

    <div className={context.theme} style={{'width':'120px','height':'120px' ,'padding':'20px','border':'1px solid black' }}>{children}</div>
    </>)
}
export default Box