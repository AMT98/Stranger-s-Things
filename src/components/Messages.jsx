import React, { useState } from "react";
import Popup from "./Popup";

const Messages = ({ url, posts, postId, token }) => {
  const [title, setTitle] = useState("");

  const handleMessage = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${url}/posts/${postId}/messages`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          message: {
            content: `${title}`,
          },
        }),
      });
      const newData = await response.json();
      console.log(newData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Popup
      btnTxt="Send Message"
      modalTitle="Send Message"
      handleSubmit={handleMessage}
      submitBtnTxt="Send"
    >
      <form>
        <h4>Send a message</h4>
        <label>
          <input
            className="addInput"
            type="text"
            placeholder="Message*"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </label>
      </form>
    </Popup>
  );
};

export default Messages;
