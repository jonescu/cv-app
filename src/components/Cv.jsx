import React from 'react'
import { FaDownload } from 'react-icons/fa'

function Cv({ input }) {

  return (
    <div className='cv-container'>

      <div className='general-spans'>
        <h3>About</h3>
        <span id='name'>{input.name ? `${input.name}` : "Name here"}</span>
        <span id='email'>{input.email ? `${input.email}` : "Email here"}</span>
        <span id='tel'>{input.tel ? `${input.tel}` : "Phone # here"}</span>
      </div>
    
      <div className='education-spans'> 
        <h3>Education</h3>
        <span>{input.institution ? `${input.institution}` : "School here"}</span>
        <span>{input.field ? `${input.field}` : "Subject here"}</span>
        <span>{input.institutionFrom ? `${input.institutionFrom}` : "From"}</span>
        <span>{input.institutionTo ? `${input.institutionTo}` : "To"}</span>
      </div>
    
      <div className='experience-spans'>
        <h3>Work Experience</h3>
        <span>{input.company ? `${input.company}` : "Company here"}</span>
        <span>{input.jobTitle ? `${input.jobTitle}` : "TItle held"}</span>
        <span>{input.companyFrom ? `${input.companyFrom}` : "From"}</span>
        <span>{input.companyTo ? `${input.companyTo}` : "To"}</span>
      </div>

      <div className='buttons-container'>
        <button className='clear-btn'>Clear</button>
        <button className='download-btn'><FaDownload/> PDF</button>
      </div>
     
    </div>
  )
}

export default Cv