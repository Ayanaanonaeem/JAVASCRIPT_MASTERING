import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(15)
   var plus=()=>{
    setCount((prevcount)=>prevcount+1)
    setCount((prevcount)=>prevcount+1)
    setCount((prevcount)=>prevcount+1)
    setCount((prevcount)=>prevcount+1)
    setCount((prevcount)=>prevcount+1)
 
    
   }
   var minus=()=>{
    setCount(count-1)
   }
  return (
    <>
    <br />
    <br /><br />
     <div className='text-center'>
      <h1 className='text-8xl'>{count}</h1>
      <button onClick={plus} className='bg-blue-600 rounded-2xl px-4 border border-black mr-7'>PLUS</button>
      <button onClick={minus} className='bg-blue-600 rounded-2xl px-4 border border-black'>Minus</button>
      </div>
    </>
  )
}

export default App
