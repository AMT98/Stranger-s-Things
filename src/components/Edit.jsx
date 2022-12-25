import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Popup from "./Popup";

const Edit = (
  {
  setData,
  data, 
  token, 
  postId,
  postDescription,
  postPrice,
  postLocation,
  // postDeliver, 
  postTitle }) => {
  const [title, setTitle] = useState(postTitle);
  const [description, setDescription] = useState(postDescription);
  const [price, setPrice] = useState(postPrice);
  const [location, setLocation] = useState(postLocation);
  let history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "https://strangers-things.herokuapp.com/api/2209-FTB-CT-WEB-PT";
    try {
      const response = await fetch(`${url}/posts/${postId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          post: {
            title: `${title}`,
            description: `${description}`,
            price: `${price}`,
            location: `${location}`,
            
          },
        }),
      });
      const newData = await response.json();
      setData([...data, newData.data.post]);
      setTitle("");
      setDescription("");
      setPrice("");
      setLocation("");
      history.push("/posts");
      console.log(newData);
      window.location.reload()
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Popup
      btnTxt="Edit Your Post"
      modalTitle="Edit Post"
      handleSubmit={handleSubmit}
      submitBtnTxt="SAVE CHANGES"
    >
      <form className="addForm">
        <h1>Edit The Post</h1>
        <label>
          <input
            className="addInput"
            type="text"
            placeholder="Title*"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </label>
        <label>
          <input
            className="addInput"
            type="text"
            placeholder="Description*"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></input>
        </label>
        <label>
          <input
            className="addInput"
            type="text"
            placeholder="Price*"
            required
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          ></input>
        </label>
        <label>
          <input
            className="addInput"
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          ></input>
        </label>

        <label htmlFor="willDeliver" className="optionLabel">
          <br />
          Will Deliver?
          <select>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </label>
      </form>
    </Popup>
  );
};

export default Edit;
