import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [bgcolor, setBgColor] = useState("lightgreen");

  return (
    <div className="w-screen h-screen" style={{backgroundColor : bgcolor}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick={() => {setBgColor("red")}} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor : "red"}}>Red</button>
          <button onClick={() => {setBgColor("blue")}} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor : "blue"}}>Blue</button>
          <button onClick={() => {setBgColor("green")}} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor : "green"}}>Green</button>
        </div>
      </div>
    </div>
  )
}

export default App
