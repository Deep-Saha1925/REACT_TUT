import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <h1 className='bg-green-400 text-black p-4 rounded-xl center'>Tailwind test</h1>

          
    <div class="flex flex-col items-center p-7 rounded-2xl">
      <div>
        <img class="size-48 shadow-xl rounded-md" alt="" src="https://www.pexels.com/photo/springtime-blossoms-in-norway-s-urban-setting-37363298/" />
      </div>
      <div class="flex">
        <span class="text-2xl font-medium">Class Warfare</span>
        <span>The Anti-Patterns</span>
        <span class="flex">
          <span>No. 4</span>
          <span>·</span>
          <span>2025</span>
        </span>
      </div>
    </div>
    </>
  )
}

export default App
