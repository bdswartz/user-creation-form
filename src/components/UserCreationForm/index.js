import React, { useState, useEffect } from 'react'
import { validateEmail } from '../../utilities/helpers';
import SelectItem from '../SelectItem';
import { removeRepeatItems } from '../../utilities/helpers';

// const apiUri = 'https://not-a-real-endpoint.smallworld.ai/form'
const apiUri = 'http://127.0.0.1:3001/form'

let jobFunctionsClean = [];
let statesClean = []

const UserCreationForm = () => {

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
        city: ''
    });
    const [errorMessage, setErrorMessage]= useState('');
    const [submitMessage, setSubmitMessage] = useState('');
// deconstruct for convenience
    const {firstName, lastName, emailAddress, password, company, jobTitle, jobFunction, state, city} = formState

// on load get the data to populate the select elements
    useEffect( ()=> {
        const fetchData = async () => {
            try {
                // await the asynchronous fetch call to the back end api endpoint
                const res = await fetch(apiUri);
                // convert to json
                const jsonData = await res.json();
                // load data into arrays for populating select options
                // pull object property, remove repeated items, and sort alphabetically
                const {jobFunctions, states} = jsonData;
                jobFunctionsClean = removeRepeatItems(jobFunctions.sort());
                statesClean = removeRepeatItems(states.map(state=>state.name).sort());
                } 
                catch (error) {
                    console.log(error);
                }
        }
        fetchData();
    }, []);


// form handling functions
    const handleSubmit = (e) => {
        e.preventDefault();
        // if no errors in the form, submit form state to API endpoint
        if(!errorMessage) {
            const fetchData = async () => {
                try {
                    // await the asynchronous fetch call to the back end api endpoint
                    const response = await fetch(apiUri,{
                        method: 'POST',
                        headers: {
                            Accept: 'application/json',
                                'Content-Type': 'application/json',
                            },
                        body: JSON.stringify(formState),
                    });
                    if (response.status === 200) {
                        setSubmitMessage('Form Submitted Successfully');
                        setFormState({
                            firstName: '',
                            lastName: '',
                            emailAddress: '',
                            password: '',
                            company: '',
                            jobTitle: '',
                            jobFunction: '',
                            state: '',
                            city: ''
                        });
                    }
                    else {
                        setErrorMessage(`Form failed to submit:${response.status} ${response.statusText}`)
                    }
                } catch (error) {
                    console.log(error);
                }
            };
            fetchData();
        }};

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
        <h2>User Creation Form</h2>
        <hr/>
        <div className='input-box'>
          <label htmlFor="firstName">First Name:</label>
          <input required type="text" name="firstName" data-name='First Name'value={firstName} onChange={handleChange} onBlur={handleInput}/>
        </div>
        <div className='input-box'>
          <label htmlFor="lastName">Last Name:</label>
          <input required type="text" name="lastName" data-name='Last Name' value={lastName} onChange={handleChange} onBlur={handleInput}/>
        </div>
        <div className='input-box'>
          <label htmlFor="emailAddress">Email:</label>
          <input required type="email" name="emailAddress" data-name= 'Email' value={emailAddress} onChange={handleChange} onBlur={handleInput}/>
        </div>
        <div className='input-box'>
          <label htmlFor="password">Password:</label>
          <input required type="password" name="password" data-name='Password' value={password} onChange={handleChange} onBlur={handleInput}/>
        </div>
        <div className='input-box'>
          <label htmlFor="company">Company:</label>
          <input required type="text" name="company" data-name='Company' value={company} onChange={handleChange} onBlur={handleInput}/>
        </div>
        <div className='input-box'>
          <label htmlFor="jobTitle">Job Title:</label>
          <input required type="text" name="jobTitle" data-name='Job Title' value={jobTitle} onChange={handleChange} onBlur={handleInput}/>
        </div>
        <SelectItem options={jobFunctionsClean} jobFunction={jobFunction} handleChange={handleChange} handleInput={handleInput}inputLabel= {'Job Function'} inputName={'jobFunction'}/>
        <SelectItem options={statesClean} state={state} handleChange={handleChange} handleInput={handleInput} inputLabel= {'State'} inputName={'state'}/>
        <div className='input-box'>
          <label htmlFor="city">City:</label>
          <input required type="text" name="city" data-name='City' value={city} onChange={handleChange} onBlur={handleInput}/>
        </div>
        {/* display error message if the field is empty or email is improper format */}
        {errorMessage && (
            <div>
                <p className='error'>{errorMessage}</p>
            </div>
        )}
        {submitMessage && (
            <div>
                <p className='success'>{submitMessage}</p>
            </div>
        )}
        <button type="submit">Submit</button>
    </form>
  )
}

export default UserCreationForm;