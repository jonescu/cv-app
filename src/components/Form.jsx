import React from 'react'

function Form(props) {

  return (
    <div className='form-container'  onChange={(e) => props.handleChange(e)}>

      <section id='general-info'>
        <h3>About</h3>
        <input type='text' placeholder='Name' id='name' value={props.input.name}/>
        <input type='email' placeholder='Email Address' id='email' value={props.input.email}/>
        <input type='tel' placeholder='Phone Number' id='tel' value={props.input.tel}/>
      </section>

      <section id='education-info'>
        <h3>Most Recent Education</h3>
        <input type='text' placeholder='Institution Name' id="institution" value={props.input.institution}/>
        <input type='text' placeholder='Field of Study' id='field' value={props.input.field}/>
        <input type='text' placeholder='From' id='institutionFrom' value={props.input.institutionFrom}/>
        <input type='text' placeholder='To' id='institutionTo' value={props.input.institutionTo}/>
      </section>

      <section id='experience-info'>
        <h3>Most Recent Experience</h3>
        <input type='text' placeholder='Company Name' id="company" value={props.input.company}/>
        <input type='text' placeholder='Title Held' id='jobTitle' value={props.input.jobTitle}/>
        <input type='text' placeholder='From' id='companyFrom' value={props.input.companyFrom}/>
        <input type='text' placeholder='To' id='companyTo' value={props.input.companyTo}/>
      </section>

      <section>
        <h3>Select profile image</h3>
        <input type='file' onChange={(e) => props.onImageChange(e)}/>
      </section>
    </div>
  )
}

export default Form