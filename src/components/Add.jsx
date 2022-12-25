import React, { useState } from "react";
import Popup from "./Popup";

const Add = ({ setData, data, token }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("[On Request]");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "https://strangers-things.herokuapp.com/api/2209-FTB-CT-WEB-PT";
    try {
      const response = await fetch(`${url}/posts`, {
        method: "POST",
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
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Popup
      btnTxt="Add A Post"
      modalTitle="Add Post"
      handleSubmit={handleSubmit}
      submitBtnTxt="Create"
    >
      <form className="addForm">
        <h1>Add A New Post</h1>
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

export default Add;
