import React from "react";
import Form from "./components/Form";
import Cv from "./components/Cv";
import { useState } from "react";
import './index.css'

function App() {
  // Set state
  const [input, setInput] = useState({
    name: '',
    email: '',
    tel: ''
  })

  // Get user input and change the output text to it's corresponding input
  const handleChange = (e) => {
    let myObj = {...input}

    for(let key in myObj) {
      if(e.target.id === key) {
        myObj[key] = e.target.value
        setInput({...myObj})
      }
    }
  }

  return (
    <div className="app-container">
      <Form handleChange={handleChange}/>
      <Cv input={input}/>
    </div>
  )
}
  
export default App;