import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';


function LoginPage() {

    const [email, setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [error, setError]=useState('');

    const navigate=useNavigate();



    const logIn= async ()=>{
        try{
            await signInWithEmailAndPassword(getAuth(),email, password);
            navigate('/articles');
        } catch(e){
            setError(e.message);
        }
        
    }

    return (
        <div>
        <h1>Login</h1>
        {error && <p className="error">{error}</p>}
        <input 
            placeholder='Your Email Addres'
            value={email}
            onChange={e =>setEmail(e.target.value)}/>
        <input type='password'
            placeholder='Your Password'
            value={password}
            onChange={e=>setPassword(e.target.value)}/>
        <button onClick={logIn}>Log In</button>
        <br></br>
        <Link to="/createaccount">Don't have an account? Create One here.</Link>
        </div>
    );
}

export default LoginPage;
