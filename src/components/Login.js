import React, {useState} from 'react';
import {useHistory} from "react-router-dom"

const Login = () => {

    let history= useHistory()
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = (e) => {
        return (
            e.preventDefault()
        )
    }


    return (
        <>
        <form
        onClick={handleSubmit}
        className='loginInput'>
            <h1>LOG IN</h1>
            <label>
                <input 
                    className='inputField'
                    type="text" 
                    placeholder= "Username*" 
                    maxLength="10"
                    required
                    value={userName} 
                    onChange={(e) => setUserName(e.target.value)}>

                </input>
            </label>

            <label>
                <input 
                    className='inputField'
                    type="password" 
                    placeholder= "Password*" 
                    maxLength="8"
                    required
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}>

                </input>
            </label>
            <button className="inputBtn">Sign in</button>
            <br></br>
            <br></br>
            <label className='optionLabel'>Don't have an account?</label>
            <button 
            className="inputBtn"
            onClick={() => {
                history.push('/signup')
            }}
            > Sign up!</button>
        </form>
        
        </>
    )
}

export default Login