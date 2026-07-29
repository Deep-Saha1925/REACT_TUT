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
    if(counter >= 22)
      alert("Value cannot be greater than 22")
    else
      setCounter(counter + 1)
  }

  const subValue = () => {
    if(counter <= 0)
      alert("Value cannot be less than 0")
    else
      setCounter(counter - 1)
  }

  return (
    <>
      <h1>React</h1>
      <h3>Counter value: {counter}</h3>

      <button
        onClick={addValue}
      >Increase</button>
      <br />
      <button
        onClick={subValue}
      >Decrease</button>
    </>
  )
}

export default App
