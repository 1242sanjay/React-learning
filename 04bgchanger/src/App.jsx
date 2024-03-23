import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState()

  return (
    <div className='w-full h-screen duration-200'
    style={{backgroundColor:color}}
    >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl'>
          <button onClick={()=>setColor("Red")} className='outline-none bg-red-800 px-4 py-1 text-white shadow-md rounded-3xl'>Red</button>
          <button onClick={()=>setColor("green")} className='outline-none bg-green-800 px-4 py-1 text-white shadow-md rounded-3xl'>Green</button>
          <button onClick={()=>setColor("blue")} className='outline-none bg-blue-800 px-4 py-1 text-white shadow-md rounded-3xl'>Blue</button>
          <button onClick={()=>setColor("orange")} className='outline-none bg-orange-800 px-4 py-1 text-white shadow-md rounded-3xl'>Orange</button>
          <button onClick={()=>setColor("yellow")} className='outline-none bg-yellow-800 px-4 py-1 text-white shadow-md rounded-3xl'>Yellow</button>
          <button onClick={()=>setColor("black")} className='outline-none bg-black px-4 py-1 text-white shadow-md rounded-3xl'>Black</button>
        </div>
      </div>
    </div>
  )
}

export default App
