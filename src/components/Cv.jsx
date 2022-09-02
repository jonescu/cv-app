import React from 'react'

function Cv({ input }) {

  return (
    <div className='cv-container'>

      <div className='general-spans'>
        <span id='name'>Name: {input.name}</span>
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
        <button>Clear</button>
        <button>Download PDF</button>
      </div>
     
    </div>
  )
}

export default Cv