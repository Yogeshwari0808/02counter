import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [ counter , setCounter ]=  useState(1)

  //let counter = 1;
  const addValue = () => {
         if (counter<20)   {
         setCounter(
        counter+1
          )

         }
    console.log("value added",counter);

     
}
 const removeValue = () =>{

  if(counter>0){
  setCounter(counter-1)

  }
  console.log("value removed" , counter);

 }


  return (
    <>
    
        <h1>hello... i am yogita...</h1>
        <h2> counter is {counter}</h2>

        <button onClick={addValue}>Add Value {counter}</button>
        <br />
        <button onClick={removeValue}>Remove Value {counter}</button>

    </>
  )
}

export default App
