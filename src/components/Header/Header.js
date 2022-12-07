import React from 'react';
import "./Header.css"
import { Link } from 'react-router-dom'
import useFirebase from '../useFirebase/useFirebase';

const Header = () => {
    const { googleUser, handleSignOut } = useFirebase();
    console.log(googleUser)
    return (
        <div className='header'>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/about">About</Link>
                <Link to="/registration">Registration</Link>
                {
                    googleUser?.uid ? <Link onClick={handleSignOut}>SignOut ({googleUser.displayName})</Link> : <Link to="/login">Login</Link>
                }
            </nav>
        </div>
    );
};

export default Header;