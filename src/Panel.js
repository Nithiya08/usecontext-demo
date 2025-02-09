import { useContext } from "react"
import { NameProvider } from "./App"

function Panel({children}){
    let context=useContext(NameProvider)
    return(<>
    <section style={{'border':'1px solid black', 'backgroundColor':context.color}}>
        
        {children}
    </section>
    </>)
}
export default Panel