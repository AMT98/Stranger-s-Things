import React, {useEffect, useState} from "react";

const Add = ({url}) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [location, setLocation] = useState('')

    const [posts, setPosts] = useState([])


    const postPosts = async() => {
        
        const response = await fetch(`${url}/posts`
        , {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // 'Authorization': 'Bearer TOKEN_STRING_HERE'
            },
            body : JSON.stringify({
              post: {
                title,
                description,
                price,
                location
              }  
            })
        }
        )
        const data = await response.json()
        setPosts(data.data.posts)
        console.log(data);

 }
    // useEffect(() => {
    //     postPosts();
    // },[]);
    

    const handleSubmit = (e) => {
        return (
            e.preventDefault()
        )
    }

    
    return (
        <>
        <form
        className='addForm'
        onClick={handleSubmit}>
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

            {/* <label htmlFor='willDeliver'>
                <select
                name="willDeliver"
                className='checkedInput'
                type="checkbox"
                // required
                // value={checked}
                // defaultChecked={checked}
                checked = {checked}
                onChange={handleChecked}
                >
                Willing to Deliver?
                </select>
            </label> */}
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



       
            <button className="addInput createBtn">CREATE</button>
        </form>
        </>
    )
}

export default Add