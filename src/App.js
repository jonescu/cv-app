import React from "react";
import Form from "./components/Form";
import Cv from "./components/Cv";
import Header from "./components/Header";
import { useState } from "react";
import './index.css'

function App() {
  // Set state
  const [input, setInput] = useState({
    name: '',
    email: '',
    tel: '',
    institution: '',
    field: '',
    institutionFrom: '',
    institutionTo: '',
    company: '',
    jobTitle: '',
    companyFrom: '',
    companyTo: ''
  })

  // Get user input and change the output text to it's corresponding input
  const handleChange = (e) => {
    let myObj = {...input}
    console.log(myObj)

    for(let key in myObj) {
      if(e.target.id === key) {
        myObj[key] = e.target.value
        setInput({...myObj})
      }
    }
  }

  return (
    <div className="app-container">
      <Header />
      <Form handleChange={handleChange}/>
      <Cv input={input}/>
    </div>
  )
}
  
export default App;