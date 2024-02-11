import React from 'react';

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
                <button>Login</button>
                <p className="loginsignup-login">Already have an account? <span>Login here</span></p>
                <div className="loginsignup-agree">
                    <input type="checkbox" name='' id='' />
                    <p>By continuing, i agree to the</p>
                </div>
            </div>
        </div>
    );
};

export default LoginSignup;