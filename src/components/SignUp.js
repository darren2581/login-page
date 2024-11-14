import { React,useState } from 'react';
import {auth} from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await createUserWithEmailAndPassword(auth, email, password);
            console.log('Account Created');
        }catch{
            console.log('Error');
        }
    }

  return (
    <div className='auth-container'>
        <form className='auth-form' onSubmit={handleSubmit}>
            <h1>Sign Up</h1>
            <label>
                Email
                <input type='email' name='email' placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)}/>
            </label>
            <label>
                Password
                <input type='password' name='password' placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)}/>
            </label>
            <button type='submit'>Sign Up</button>
            <p>Already Registered? <Link to="/login">Login</Link></p>
        </form>
    </div>
  );
}

export default SignUp;
