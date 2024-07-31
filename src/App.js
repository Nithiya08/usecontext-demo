import logo from './logo.svg';
import './App.css';
import Sample from './Sample';
import Panel from './Panel';
import Button from './Button';
import Child from './Child';
import {createContext, useState} from 'react'
import Box from './Box';
export const NameProvider= createContext()

function App() {
  let [color,setcolor]=useState('grey')
  let [theme,setThem]=useState('dark')
  return (<>
    
    <div className="App">

    <select onChange={(event)=>setcolor(event.target.value)}>
    <option value='red'>Red</option>
    <option value='orange'>orange</option>
    <option value='pink'>pink</option>
  </select>

  <select onChange={(event)=>setThem(event.target.value)}>
    <option value='dark'>dark</option>
    <option value='light'>light</option>
    
  </select>

      <NameProvider.Provider value={{'name':'john','color':color,'theme':theme}}>
      <Sample>Text to be displayed in the sample </Sample>
      <Panel>
        <h1>panel1</h1>
        <p>Paragaph 1</p>
        <Button color="blue">SingIn</Button>
        <Button>SingUp</Button></Panel>
        <Panel>
        <h1>panel2</h1>
        <p>Paragaph 2</p>
        <Button color="green">SingIn</Button>
        <Button>SingUp</Button></Panel>
        <Child ></Child>
        <Box><b>This is box text</b></Box>
        </NameProvider.Provider>
    </div>
  </>);
}

export default App;



// props drilling is the process of passing the data from parent to child of child (grand child,...)
//in this process , if we have to pass that props to only the greatGrandChild (the GreatGrandChild ) is child of grandchild,
//grandChild is the child of child ,here we have the greatgrandchild component only use the props,in props drilling
//we cannot share the props directly to the child of child component ,here we have to that props to child and grandchild and then we have to pass
//the props to greatgrandchild ,even the other component is not using that props we have to pass that props ..
//beacuse we need that props in greatgrand child component ..to avoiding this process we can use createContext and useContext
//createContact is the provider ,it provide the acess of props in any level of childeren .