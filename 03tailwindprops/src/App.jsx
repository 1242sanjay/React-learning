import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username:"Ram",
    age:21
  }
  let newArray = [1, 2, 4, 6]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <Card username='1242sanjay' btnTxt="Visit Profile" myobject = {myObj} newA = {newArray}/>
      <Card username='mekumarsanjay' btnTxt="Visit Profile"/>
      <Card/>
    </>
  )
}

export default App
