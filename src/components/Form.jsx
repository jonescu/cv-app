import React from 'react'
// import { useState } from 'react'

function Form(props) {

  const addSection = (e) => {
    const id = e.target.id

  }

  return (
    <div className='form-container'  onChange={(e) => props.handleChange(e)}>

      <section id='general-info'>
        <h3>About</h3>
        <input type='text' placeholder='Name' id='name'/>
        <input type='email' placeholder='Email Address' id='email'/>
        <input type='tel' placeholder='Phone Number' id='tel' />
      </section>

      <section id='education-info'>
        <h3>Education</h3>
        <input type='text' placeholder='Institution Name' id="institution"/>
        <input type='text' placeholder='Field of Study' id='field'/>
        <input type='text' placeholder='From' id='institutionFrom'/>
        <input type='text' placeholder='To' id='institutionTo'/>
      </section>

      <section id='experience-info'>
        <h3>Experience</h3>
        <input type='text' placeholder='Company Name' id="company"/>
        <input type='text' placeholder='Title Held' id='jobTitle'/>
        <input type='text' placeholder='From' id='companyFrom'/>
        <input type='text' placeholder='To' id='companyTo'/>
      </section>

        <button className="addEducationBtn" id="educationBtn" onClick={(e) => addSection(e)}>Add Education</button>
        <button className="addExperienceBtn" id="experienceBtn" onClick={(e) => addSection(e)}>Add Experience</button>

    </div>
  )
}

export default Form