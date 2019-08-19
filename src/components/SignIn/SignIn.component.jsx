import React, { Component } from 'react';
import './SignIn.styles.scss';

import FormInput from '../FormInput/FormInput.component';
import CustomButton from '../CustomButton/CustomButton.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends Component {
    state = {
        email:'',
        password: ''
    }

    onFormSubmit = (e) => {
        e.preventDefault();

        this.setState({email:'', password:''})
    }

    onInputChange = (e) =>{
        const { value , name } = e.target;

        this.setState({ [name] : value })
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign In with Email and password</span>

                <form onSubmit={this.onFormSubmit}>
                    <FormInput 
                    type='email'
                    name='email'
                    onInputChange={this.onInputChange} 
                    value={this.state.email} 
                    label='email'
                    required />
                    <FormInput 
                    type='password' 
                    name='password' 
                    onInputChange={this.onInputChange}
                    value={this.state.password} 
                    label='password'
                    required />
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton 
                            onClick={signInWithGoogle} 
                            isGoogleSignIn >
                                Sign In With google
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;
