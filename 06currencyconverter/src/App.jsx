import { useState } from 'react'
import { useCurrencyInfo } from '../../hooks'
import { Input } from '../../components'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-center bg-red-900'>Currency Converter</h1>
    </>
  )
}

export default App
