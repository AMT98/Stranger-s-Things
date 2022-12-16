import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom"


const Add = ({url}) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [location, setLocation] = useState('')
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzlhYzc5MjUxMGEwODAwMTcyOTM1NmQiLCJ1c2VybmFtZSI6IkFzd2luIiwiaWF0IjoxNjcxMTUxOTcxfQ.Jzjv0Q3phc_xG52_7b7wJA-Kd40zOrNWKwW9gNolATU"
    let history= useHistory()



    const handleSubmit = async(e) => {
            e.preventDefault()
        try {
            const response = await fetch(`${url}/posts`
            , {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body : JSON.stringify({
                  post: {
                    title: `${title}`,
                    description: `${description}`,
                    price: `${price}`,
                    location: `${location}`
                  }  
                })
            }
            )
            const data = await response.json()
            console.log(data);
            history.push('/posts')

        }
        catch(error){
            console.error(error)
        }
    }

    
    return (
        <>
        <form
        className='addForm'
        onSubmit={handleSubmit}>
            <h1>Add New Post</h1>
            <label>
                <input 
                className="addInput"
                type="text"
                placeholder = "Title*"
                required
                value={title}
                onChange = {(e) => setTitle(e.target.value)}
                >
                </input>
            </label>
            <label>
                <input 
                className="addInput"
                type="text"
                placeholder = "Description*"
                required
                value={description}
                onChange = {(e) => setDescription(e.target.value)}
                >
                </input>
            </label>
            <label>
                <input 
                className="addInput"
                type="text"
                placeholder = "Price*"
                required
                value={price}
                onChange = {(e) => setPrice(e.target.value)}
                >
                </input>
            </label>
            <label>
                <input 
                className="addInput"
                type="text"
                placeholder = "Location"
                value={location}
                onChange = {(e) => setLocation(e.target.value)}
                >
                </input>
            </label>

 
            <label 
            htmlFor="willDeliver"
            className="optionLabel"
            >
            <br />
                Will Deliver?
                <select className='checkedInput'>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </label>
            <button 
            className="addInput createBtn"
            >CREATE</button>
        </form>
        </>
    )
}

export default Add