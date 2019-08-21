import React, { Component } from 'react';
import './SignUp.styles.scss';

import FormInput from '../FormInput/FormInput.component';
import CustomButton from '../CustomButton/CustomButton.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class SignUp extends Component {
    state = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword:''
    }

    onFormSubmit = async e => {
        e.preventDefault();

        const { displayName , email , password , confirmPassword } = this.state; 

        if ( password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }

        try{
            const { user } = await auth.createUserWithEmailAndPassword(email,password);

            await createUserProfileDocument(user,{displayName});

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword:''
            })

        } catch (error) {
            console.log(error);
        }
    } 

    onInputChange = (e) => {
        const { name, value } = e.target;

        this.setState({[name]: value });
    }

    render() {
        return (
            <div className='sign-up' >
                <h2 className="title">
                    I do not have an account
                </h2>
                <span>sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.onFormSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={this.state.displayName}
                        onChange={this.onInputChange}
                        label='Display Name'
                        required
                    />
                    <FormInput
                        type='email'
                        name='email'
                        value={this.state.email}
                        onChange={this.onInputChange}
                        label='Email'
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={this.state.password}
                        onChange={this.onInputChange}
                        label='Password'
                        required
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={this.state.confirmPassword}
                        onChange={this.onInputChange}
                        label='Confirm Password'
                        required
                    />
                    <CustomButton type='submit'>SIGN UP</CustomButton>

                </form>
            </div>
        )
    }
}
export default SignUp;