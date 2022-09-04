import React from 'react'
import { FaDownload } from 'react-icons/fa'

function Cv({ input }) {

  return (
    <div className='cv-container'>

      <div className='general-spans'>
        <span id='name'>{input.name ? `${input.name}` : "Your name here"}</span>
        <span id='email'>Email: {input.email}</span>
        <span id='tel'>Phone: {input.tel}</span>
      </div>
    
      <div className='education-spans'> 
        <span>School Name</span>
        <span>Subject</span>
        <span>From</span>
        <span>To</span>
      </div>
    
      <div className='experience-spans'>
        <span>Company Name</span>
        <span>Title Held</span>
        <span>From</span>
        <span>To</span>
      </div>

      <div className='buttons-container'>
        <button className='clear-btn'>Clear</button>
        <button className='download-btn'><FaDownload/> PDF</button>
      </div>
     
    </div>
  )
}

export default Cv