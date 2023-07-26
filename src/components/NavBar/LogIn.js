import React, { useState } from 'react';
import "./LogIn.css";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { createUserWithEmailAndPassword, signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, provider } from '../../firebase';
const LogIn = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const SignIn = e => {
        e.preventDefault();
        // signInWithPopup(auth, provider)
        // .then((result) => {
        //     console.log(result)
        //     navigate('/')
        // })
        // .catch((error) => {
        //     console.log("Error", error)
        // })
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                const userName = userCredential.user.displayName;
                navigate("/", {
                    state: {
                      userName,
                    },
                  });
                console.log("seccess", user)
                // ...
            })
            .catch((error) => {
                console.log("Error", error)
            });

    }
    const register = e => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                if (userCredential)
                    navigate('/')
                const user = userCredential.userName;
                const userId = user.uid;
                console.log("Registration successful for user:", user);
            })
            .catch((error) => {
                console.log("Error", error)
            })
    }

    return (
        <div className='login'>
            <Link to="/">
                <img className='login_logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/603px-Amazon_logo.svg.png?20220213013322' />
            </Link>
            <div className='login_container'>
                <h1>Sign-In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' className='text_color' value={email} placeholder='Enter your email' onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type='password' className='text_color' placeholder='Enter your password' value={password} onChange={e => setPassword(e.target.value)} />
                    <button type='submit' onClick={SignIn} className='login_signinbutton'>Sign In</button>
                </form>
                <p>By signing-in you agree to the Amazon Clone condition of use and sale</p>
                <button onClick={register} className='login_registerbutton'>Create your Amazon account</button>
            </div>
        </div>
    )
}

export default LogIn;