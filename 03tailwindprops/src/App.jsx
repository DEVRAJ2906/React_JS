import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from '../../components/Card.jsx'
import React from 'react';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Card username="devraj" profession="Software Engineer" />
    <Card username="tulsi" profession="Hardware Engineer" />
    </>
  )
}

export default App;
