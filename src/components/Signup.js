import React, {useState} from 'react';

const Signup = ({url}) => {

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
// console.log(userName);
    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const response = await fetch(`${url}/users/register`, {
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
            const data = await response.json()
            // console.log(data) 
        }
        catch(error){
            console.error(error)
        }
        
    }

    return (
        <>
        <form
        onSubmit={handleSubmit}
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
                    type="password" 
                    placeholder= "Password*" 
                    maxLength="8"
                    required
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}>

                </input>
            </label>

            <button className="inputBtn"
            >Sign up</button>
        </form>
        
        </>
    )
}

export default Signup