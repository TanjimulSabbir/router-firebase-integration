import React, { useState } from 'react';
import useFirebase from '../useFirebase/useFirebase';
import "./Login.css"
const Login = () => {
    const { signInWithGoogle } = useFirebase();
    const [user, setUser] = useState({ email: '', password: '' })

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    const handleBlur = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h5 onClick={signInWithGoogle}>Login Google Account</h5>
                <div className='input'>
                    <input onBlur={handleBlur} name="email" type="text" placeholder='email' />
                    <br /><br />
                    <input onBlur={handleBlur} name="password" type="text" placeholder='password' />
                    <br />
                </div>
                <div className='regBtn'>
                    <button type="submit">Login</button>
                </div>
                <p>{ }</p>
            </form>
        </div>
    );
};

export default Login;