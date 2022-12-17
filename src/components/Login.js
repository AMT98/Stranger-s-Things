import React, {useState} from 'react';
import {useHistory} from "react-router-dom"

const Login = ({url}) => {

    let history= useHistory()
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [dataSuccess, setDataSuccess] = useState(true)
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(`${url}/users/login`, {
                method : "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user: {
                        username: `${userName}`,
                        password: `${password}`
                    }
                })
            }) 
            var data = await response.json()
            console.log(data) 
            setUserName('')
            setPassword('')
            if(data.success){
                setDataSuccess(false)
                alert('Login was successful!')
            }else{
                alert('Username or password you entered was incorrect!')
            }
        }
        catch(error){
            console.error(error)
        }
        
    }
    
    
    return (
        <>
        {dataSuccess ? 
        <form
        onSubmit={handleSubmit}
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
            <button 
            className="inputBtn"
            // onClick={() => {
            //     history.push('/posts')
            // }}
            >Log in</button>
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
        : <button>Log Out!</button>
        }
        </>
    )
}

export default Login