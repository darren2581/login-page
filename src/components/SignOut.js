import { auth } from '../firebase';
import { signOut } from 'firebase/auth';

const SignOut = () => {
    const handleSignOut = async () => {
        try {
            await signOut(auth);
            console.log('Successfully signed out');
        } catch (error) {
            console.log('Error signing out');
        }
    }

    return (
        <div className='auth-container'>
            <div className='auth-form'>
                <h1>Sign Out</h1>
                <p>Are you sure you want to sign out?</p>
                <button onClick={handleSignOut}>Sign Out</button>
            </div>
        </div>
    );
}

export default SignOut;
