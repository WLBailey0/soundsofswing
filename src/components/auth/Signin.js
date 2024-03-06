import React from 'react';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../../config/fbconfig';
import { NavLink, useNavigate } from 'react-router-dom'


export default function Login(){
    const navigate = useNavigate()
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")

    const login = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
            const user = userCredentials.user;
            navigate('/band-page')
            console.log(user)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <div>
            <h1>LoginPage</h1>
            <form>
                <div>
                    <label htmlFor="email-addr">
                        Email Address
                    </label>
                    <input 
                        id="email-addr"
                        name="email"
                        type="email"                                    
                        required                                                                                
                        placeholder="Email address"
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                    </div>
                    <div>
                        <label htmlFor="password">
                            Password
                        </label>
                        <input
                            id='password'
                            name='password'
                            type='password'
                            required
                            placeholder='Password'
                            onChange={(e)=>setPassword(e.target.value)}
                        />
                    </div>
                    <button onClick={login}>
                        Login
                    </button>
            </form>
        </div>
    )
}