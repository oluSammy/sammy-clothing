import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomBtn from '../custom-btn/custom-btn.component';

import {auth, signInWithGoogle} from '../../firebase/firebase.utils'
import './sign-in.styles.scss';


class SigIn extends React.Component{
    constructor(props){
        super(props);
        
            this.state ={
                email: '',
                password: ''
            }
    }

    handleSubmit = async event =>{
        event.preventDefault();
        const {email, password } = this.state;
        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''})        
        }catch(error){
            console.log(error);
        }
    }

    handleChange = event=>{
        const {value, name} = event.target;
        this.setState({ [name]: value})
    }
    render(){
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" name="email" value={this.state.email} handleChange={this.handleChange} label="Email" required/>
                    
                    <FormInput type="password" name="password" value={this.state.password} handleChange={this.handleChange} label="Password" required/>
                    
                    <div className="buttons">
                        <CustomBtn type="submit" >Sign In </CustomBtn>
                        <CustomBtn onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google </CustomBtn>
                    </div>
                </form>
            </div>
        );
    }
}

export default SigIn;