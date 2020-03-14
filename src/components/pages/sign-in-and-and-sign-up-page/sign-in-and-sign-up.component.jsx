import React from 'react';
import SignIn from '../../sign-in/sign-in.component';
// import SignUp from '../../sign-up/signup.components.jsx';
import './sign-in-and-sign-up.styles.scss';
import SignUp from '../../sign-up/signup.components';

const SignInAndSignUpPage = ()=>(
    <div className="sign-in-and-sign-up">
        <SignIn/>
        <SignUp/>
    </div>
);

export default SignInAndSignUpPage;