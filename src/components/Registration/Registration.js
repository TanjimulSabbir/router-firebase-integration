import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../useFirebase/useFirebase';
import "./Registration.css"

const Registration = () => {
    const [user, setUser] = useState({ email: '', password: '' })

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    const handleBlur = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
        console.log(user)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Link>Create Google Account</Link>
                <div className='input'>
                    <input onBlur={handleBlur} name="email" type="text" placeholder='email' />
                    <br /><br />
                    <input onBlur={handleBlur} name="password" type="text" placeholder='password' />
                    <br />
                </div>

                <div className='regBtn'>
                    <button type="submit">Registration</button>
                </div>

                <p>{ }</p>
            </form>
        </div>
    );
};

export default Registration;