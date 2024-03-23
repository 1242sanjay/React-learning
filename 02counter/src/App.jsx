import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'




function App() {
  // let counter = 15
  let [counter, setCounter] = useState(0)

  const addValue = () =>{
    console.log("Value added", counter)
    counter = counter + 1
    setCounter(counter)
  }

  const removeValue = () =>{
    console.log("Value added", counter)
    if (counter != 0)
     counter = counter - 1;
    setCounter(counter)
  }

  return (
    <>
      <h1>Counter in React</h1>
      <h3>Counter Value : {counter}</h3>
      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
