import React, {useState} from 'react';

const Add = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [location, setLocation] = useState('')
    const [checked, setChecked] = useState(false);


    const handleSubmit = (e) => {
        return (
            e.preventDefault()
        )
    }
    const handleChecked = () => {
        setChecked(!checked);
      };
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

            <label>
                <input
                className='checkedInput'
                type="checkbox"
                defaultChecked={checked}
                onChange={handleChecked}
                />
                Willing to Deliver?
            </label>
            <button className="addInput createBtn">CREATE</button>
        </form>
        </>
    )
}

export default Add