import React from 'react';

export default function newUser(props) {
    const {values, submit, change, disabled, errors} = props;

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }
    const onChange = evt => {
        const { name, value, checked, type } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value; 
        change(name, valueToUse)

    }
    return (
        <form>
            <button disabled={disabled} onClick={onSubmit}>Submit</button>

            <div className='errors'>
                <div>{errors.firstName}</div>
                <div>{errors.lastName}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.service}</div>
            </div>
      
            <div>
            <label>First Name&nbsp;
                <input 
                type='text'
                name='firstName'
                value={values.firstName}
                onChange={onChange}
                />
            </label>
            <br/>
            <label>Last Name&nbsp;
                <input 
                type='text'
                name='lastName'
                value={values.lastName}
                onChange={onChange}
                />
            </label>
            </div>
            <div>
                <label>Email&nbsp;
                    <input 
                    type='text'
                    name='email'
                    value={values.email}
                    onChange={onChange}
                    />
                </label>
                <br/>
                <label>Password&nbsp;
                    <input 
                    type='password'
                    name='password'
                    value={values.password}
                    onChange={onChange}
                    />
                </label>
            </div>
            <label>Accept Terms of Service.
                <input
                    type="checkbox"
                    name="agree"
                    onChange={onChange}
                    checked={values.agree}
                />
            </label>

        </form>
    )
};