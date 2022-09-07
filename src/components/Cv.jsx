import React from 'react'
import { FaDownload } from 'react-icons/fa';

function Cv({ input, img, clearInputs }) {
 
  return (
    <div className='cv-container'>
      <div className='text-sections'>
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
          <span>{input.institutionFrom ? `From: ${input.institutionFrom}` : "From"}</span>
          <span>{input.institutionTo ? `To: ${input.institutionTo}` : "To"}</span>
        </div>
      
        <div className='experience-spans'>
          <h3>Work Experience</h3>
          <span>{input.company ? `${input.company}` : "Company here"}</span>
          <span>{input.jobTitle ? `${input.jobTitle}` : "TItle held"}</span>
          <span>{input.companyFrom ? `From :${input.companyFrom}` : "From"}</span>
          <span>{input.companyTo ? `To: ${input.companyTo}` : "To"}</span>
        </div>


        <div className='buttons-container'>
          <button className='clear-btn' onClick={clearInputs}>Clear</button>
          <button className='download-btn'><FaDownload/> PDF</button>
        </div>
     
      </div>

      <div className='picture-container'>
        <h3>Profile Photo</h3>
        {img && <img src={img} alt='profile' className='profile-thumbnail'/>}
      </div>
    </div>
  )
}

export default Cv