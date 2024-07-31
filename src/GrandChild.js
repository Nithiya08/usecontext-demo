import GreatGrandChild from "./GreatGrandChild"

function GrandChild(){
    return(<>
    <b>This is GrandChild</b><br></br>
    <GreatGrandChild ></GreatGrandChild>
    </>)
}
export default GrandChild