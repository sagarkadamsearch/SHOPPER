import React from 'react';
import './CSS/LoginSignup.css';

const LoginSignup = () => {
    return (
        <div className='loginsignup'>
            <div className="loginsignup-container">
                <h1>Sign Up</h1>
                <div className="loginsignup-fields">
                    <input type="text" name="" id="" placeholder='Your name'/>
                    <input type="email" placeholder='Email address' />
                    <input type="password" placeholder='Password' />
                </div>
                <div className="loginsignup-agree">
                    <input type="checkbox" name='' id='' />
                    <p>I agree to the terms of use & privacy policy.</p>
                </div>
                <button>Create Account</button>
                <p className="loginsignup-login">Already have an account? <span>Login here</span></p>
                
            </div>
        </div>
    );
};
export default LoginSignup;