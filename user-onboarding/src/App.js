import React, { useState, useEffect } from 'react'
import react from 'react'
import Form from './Form'
import User from './User'
import './App.css';
import axios from 'axios';
import schema from './formValidate';
import * as yup from 'yup';
import { validate } from 'uuid';

const intialFormValues ={
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  agree: false
}
const intialErr = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  agree: false
}
const intialdisabled = true;
function App() {

  const [users, setUsers] = useState([])          // array of friend objects
  const [formValues, setFormValues] = useState(intialFormValues) // object
  const [formErrors, setFormErrors] = useState(intialErr) // object
  const [disabled, setDisabled] = useState(intialdisabled)       // boolean

  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
    .then(res => {
      console.log(res)
      setUsers([res.data, ...users]);
    }).catch(err => {console.error(err)})
    .finally(() => {
      setFormValues(intialFormValues)
    })
  }
  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({...formErrors, [name]: ''}))
      .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
    }

  const inputChange = (name, value) => {
    validate(name, value)
    setFormValues({...formValues, [name]: value})
  }
  const formSubmit = () => {
    const newUser ={
      firstName: formValues.firstName.trim(),
      lastName: formValues.lastName.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim()
    }
    console.log(newUser)
    postNewUser(newUser);
  }
  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div className="App">
      <h2>Hello Homies</h2>
      <Form 
      values={formValues}
      change={inputChange}
      submit={formSubmit}
      disabled={disabled}
      errors={formErrors}
      />
      {
        users.map((user, idx) => {
          return (
            <User key={idx} details={user} />
          )
        })
      }
    </div>
  );
}

export default App;
