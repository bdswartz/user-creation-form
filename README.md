# User Creation Form

#### This is a basic React input form that receives user input and submits that input to an API endpoint using the HTTP Put method.

---

#### Collaborators:

- [Brian Swartz](https://github.com/bdswartz)

---

## Installation

This application is not deployed to the internet and at this point can only be run locally.

1.  Navigate to the folder in which you would like the application folder to reside and clone the GitHub repository for this application using the following command in the terminal: git clone git@github.com:bdswartz/user-creation-form.git
2.  Navigate to the user-creation-form folder (created in step 1) in the terminal and run the app in development mode using the following terminal command: npm start.

---

## Usage

Navigate in your browser to the following address to interact with the running application: http://localhost:3000/

Once there, the user can fill in the field or select the appropriate options and once complete press the "Submit" button to create a user.

---

## Technologies

> <b>Development Tools:</b>

- [create react app](https://www.npmjs.com/package/create-react-app)
- React.js

  ***

## User Story

### Acceptance Criteria for Minimum Viable Product

GIVEN an application that contains a form for creating a user:

- When loading the app,
  THEN display a form with the following fields; firstName, lastName, emailAddress, password, company, jobTitle, jobFunction, state, and city
- When the form displays,
  THEN allow the user to complete and submit the form
- WHEN the user presses the submit button,
  THEN do not allow the form to submit to the API endpoint without completing the entire form
- WHEN the form submits to the API endpoint,
  THEN provide feedback to the user on the status of the submission to the API endpoint

---

## Features

- The "Job Function" and "State" select fields are populated with options from an API endpoint. The data from that API endpoint is sorted alphabetically and scrubbed for repeated terms prior to generating the options dropdown.
- The application provides feedback as the user is filling in the form if any validation rules are violated. It also checks the entire form once submitted to ensure no requirements are violated prior to submitting the information to the API endpoint.
- Submission success or error messages are provided at the bottom of the form once the form is submitted.

---

## Questions

Please visit my GitHub page
at https://github.com/bdswartz

If there are any questions about the project,
feel free to open an issue or contact me at briandswartz@outlook.com
