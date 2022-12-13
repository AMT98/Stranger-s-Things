import React, {useState} from 'react';

const Login = () => {

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
                    placeholder= "Enter your username" 
                    value={userName} 
                    onChange={(e) => setUserName(e.target.value)}>

                </input>
            </label>

            <label>
                <input 
                    className='inputField'
                    type="text" 
                    placeholder= "Enter your password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}>

                </input>
            </label>
            <button>Submit</button>
        </form>
        
        </>
    )
}

export default Login