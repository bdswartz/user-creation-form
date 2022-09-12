import React, { useState } from 'react'
import { validateEmail } from '../../utilities/helpers';
import SelectItem from '../SelectItem';

// const apiUri = 'https://not-a-real-endpoint.smallworld.ai/form'

const UserCreationForm = () => {
    const testStates = ['Alaska', "Alabama","IlliNoise", "Iowa"]
    const testJobFunctions = ['Accounting', 'HR', 'Compliance']
    // state variables (getters and setters)
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
    const [errorMessage, setErrorMessage]= useState('');
// deconstruct for convenience
    const {firstName, lastName, emailAddress, password, company, jobTitle, jobFunction, state, city} = formState

// form handling functions
    const handleSubmit = (e) => {
        e.preventDefault();
        
        };

    const handleChange = event => {
        setFormState({ ...formState, [event.target.name]: event.target.value });
    };

    const handleInput = (e) => {
        if (e.target.name === 'emailAddress') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Not a valid email')
            }
            else {
                setErrorMessage('')
            }
        } 
        else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.dataset.name} is required`)
            } 
            else {
                setErrorMessage('')
            }
        }
        if (!errorMessage) {
            setFormState({...formState , [e.target.name]: e.target.value})
        }
    };
// JSX return function
  return (
    <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input type="text" name="firstName" data-name='First Name'value={firstName} onChange={handleChange} onBlur={handleInput}/>
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" name="lastName" data-name='Last Name' value={lastName} onChange={handleChange} onBlur={handleInput}/>
        </div>
        <div>
          <label htmlFor="emailAddress">Email:</label>
          <input type="email" name="emailAddress" data-name= 'Email' value={emailAddress} onChange={handleChange} onBlur={handleInput}/>
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" data-name='Password' value={password} onChange={handleChange} onBlur={handleInput}/>
        </div>
        <div>
          <label htmlFor="company">Company:</label>
          <input type="text" name="company" data-name='Company' value={company} onChange={handleChange} onBlur={handleInput}/>
        </div>
        <div>
          <label htmlFor="jobTitle">Job Title:</label>
          <input type="text" name="jobTitle" data-name='Job Title' value={jobTitle} onChange={handleChange} onBlur={handleInput}/>
        </div>
        <div>
            <SelectItem options={testJobFunctions} jobFunction={jobFunction} handleChange={handleChange} handleInput={handleInput}inputLabel= {'Job Function'} inputName={'jobFunction'}/>
        </div>
        <div>
            <SelectItem options={testStates} state={state} handleChange={handleChange} handleInput={handleInput} inputLabel= {'State'} inputName={'state'}/>
        </div>
        <div>
          <label htmlFor="city">City:</label>
          <input type="text" name="city" data-name='City' value={city} onChange={handleChange} onBlur={handleInput}/>
        </div>
        {/* display error message if the field is empty or email is improper format */}
        {errorMessage && (
            <div>
                <p className='error'>{errorMessage}</p>
            </div>
        )}
        <button type="submit">Submit</button>
    </form>
  )
}

export default UserCreationForm;