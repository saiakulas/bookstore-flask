import { useState,useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
const [array,setArray]=useState([])  
  
const fetchApi=async()=>{
  const response=await axios.get("http://127.0.0.1:5000/api/users")
  setArray(response.data.users)
}

useEffect(()=>{
fetchApi()
},[])

  return (
    <>
     {array}
    </>
  )
}

export default App
