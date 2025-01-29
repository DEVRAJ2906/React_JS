import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(10)
  
  const plusValue = () => {
    if(counter >= 20)
    setCounter(20)
    else
    setCounter(counter++)
 }

 const minusValue = () => {
  if(counter <= 0)
  setCounter(0)
  else
  setCounter(counter--)
}

  return (
    <>
      <h1>Counter : {counter}</h1>
      <button onClick={plusValue}>Increase Counter</button>
      <button onClick={minusValue}>Decrease Counter</button>
    </>
  )
}

export default App
