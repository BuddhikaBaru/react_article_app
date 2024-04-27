import React from "react";
import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const CreateAccountPage=()=>{


    const [email, setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [error, setError]=useState('');
    const [confirmPassword, setConfirmPassword]=useState('');


    const navigate=useNavigate();
    const createAccount = async()=>{
        try{
            if (password!==confirmPassword){
                setError('Password Not match');
                return;
            }
            await createUserWithEmailAndPassword(getAuth(), email, password);
            navigate('/articles');
        }catch(e){
            setError(e.message);
        }
    }





 

    return (
        <div>
        <h1>Create Account</h1>
        {error && <p className="error">{error}</p>}
        <input 
            placeholder='Your Email Addres'
            value={email}
            onChange={e =>setEmail(e.target.value)}/>
        <input type='password'
            placeholder='Your Password'
            value={password}
            onChange={e=>setPassword(e.target.value)}/>
        <input type='password'
            placeholder='Confirm Password'
            value={confirmPassword}
            onChange={e=>setConfirmPassword(e.target.value)}/>

        <button onClick={createAccount}>Create</button>
        <br></br>
        <Link to="/Login">Allready Have an Account? LogIn</Link>
        </div>
    );
}
export default CreateAccountPage;