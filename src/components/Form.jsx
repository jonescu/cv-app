import React from 'react'
// import { useState } from 'react'

function Form(props) {

  return (
    <div className='form-container'>

      <section id='general-info'>
        <h3>General</h3>
        <input type='text' placeholder='Name' id='name' onChange={(e) => props.handleChange(e)}/>
        <input type='email' placeholder='Email Address' id='email' onChange={(e) => props.handleChange(e)}/>
        <input type='tel' placeholder='Phone Number' id='tel' onChange={(e) => props.handleChange(e)}/>
      </section>

      <section id='education-info'>
        <h3>Education</h3>
        <input type='text' placeholder='Institution Name'/>
        <input type='text' placeholder='Field of Study' />
        <input type='text' placeholder='From' />
        <input type='text' placeholder='To' />
      </section>

      <section id='experience-info'>
        <h3>Experience</h3>
        <input type='text' placeholder='Company Name'/>
        <input type='text' placeholder='Title Held' />
        <input type='text' placeholder='From' />
        <input type='text' placeholder='To' />
      </section>

    </div>
  )
}

export default Form