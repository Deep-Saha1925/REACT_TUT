import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  // let counter = 5;

  const addValue = () => {
    // counter++
    setCounter(counter + 1)
  }

  return (
    <>
      <h1>React</h1>
      <h3>Counter value: {counter}</h3>

      <button
        onClick={addValue}
      >Increase</button>
      <br />
      <button>Decrease</button>
    </>
  )
}

export default App
