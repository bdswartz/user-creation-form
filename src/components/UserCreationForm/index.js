import React, { useState } from 'react'

// const apiUri = 'https://not-a-real-endpoint.smallworld.ai/form'

const UserCreationForm = () => {
    // create state variables
    const [formState, setFormState] = useState({
        firstName: '',
        lastName: '',
        emailAddress: '',
        password: '',
        company: '',
        jobTitle: '',
        jobFunction: '',
        state: '',
        city: ','
    });
    const {firstName, lastName, emailAddress, password, company, jobTitle, jobFunction, state, city} = formState

    const handleSubmit = (e) => {
        e.preventDefault();
        
        };

    const handleChange = event => {
        setFormState({ ...formState, [event.target.name]: event.target.value });
    };

  return (
    <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input type="text" name="firstName" data-name='First Name'value={firstName} onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" name="lastName" data-name='Last Name' value={lastName} onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="emailAddress">Email:</label>
          <input type="email" name="emailAddress" data-name= 'Email' value={emailAddress} onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" data-name='Password' value={password} onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="company">Company:</label>
          <input type="text" name="company" data-name='Company' value={company} onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="jobTitle">Job Title:</label>
          <input type="text" name="jobTitle" data-name='Job Title' value={jobTitle} onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="jobFunction">Job Function:</label>
          <input type="text" name="jobFunction" data-name='Job Function' value={jobFunction} onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="state">State:</label>
          <input type="text" name="state" data-name='State' value={state} onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="city">City:</label>
          <input type="text" name="city" data-name='City' value={city} onChange={handleChange}/>
        </div>
        <button type="submit">Submit</button>
    </form>
  )
}

export default UserCreationForm;