import { useState, useEffect } from 'react'
import {useDispatch} from 'react-redux'
import './App.css'
import conf from './config/conf'

function App() {

  const [loading, setLoading] = useState(true)
  const [dispatch, useDispatch] = useDispatch()

  return (
    <> 
      <h1>Blog app</h1>
    </>
  )
}

export default App
