import React from "react";
import Popup from "./Popup";

const View = ({
  postDescription,
  postPrice,
  postLocation,
  // postDeliver,
  postTitle,
}) => {
  const handleClose = () => {};
  return (
    <div className="postsBtn">
      <Popup
        btnTxt="View the post"
        modalTitle="View"
        submitBtnTxt="Close"
        handleSubmit={handleClose}
      >
        <form>
          <label>
            Title:
            <input
              className="addInput"
              readOnly
              value={postTitle}
            ></input>
          </label>
          <label>
            Description:
            <textarea
              className="addInput"
              readOnly
              value={postDescription}
            ></textarea>
          </label>
          <label>
            Price:
            <input className="addInput" readOnly value={postPrice}></input>
          </label>
          <label>
            Location:
            <input className="addInput" readOnly value={postLocation}></input>
          </label>
        </form>
      </Popup>
    </div>
  );
};
export default View;
