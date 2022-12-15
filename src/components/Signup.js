import React, {useState} from 'react';

const Signup = () => {

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
            <h1>Sign up</h1>
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
                    type="text" 
                    placeholder= "Password*" 
                    maxLength="8"
                    required
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}>

                </input>
            </label>

            <button className="inputBtn">Sign up</button>
        </form>
        
        </>
    )
}

export default Signup