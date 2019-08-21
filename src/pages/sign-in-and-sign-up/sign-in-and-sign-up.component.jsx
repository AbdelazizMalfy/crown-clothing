import React from 'react';
import './sign-in-and-sign-up.styles.scss';

import SignIn from '../../components/SignIn/SignIn.component';
import SignUp from '../../components/Signup/SignUp.component';


function SignInAndSignUpPage() {
    return (
        <div className='sign-in-and-sign-up' >
            <SignIn />
            <SignUp />
        </div>
    )
}

export default SignInAndSignUpPage;
