import React from "react";
import Popup from "./Popup";

const View = () => {
  return (
    <div className="postsBtn">
      <Popup btnTxt="View the post" modalTitle="View" submitBtnTxt="Close">
        <form>
          <h1>View the post</h1>
        </form>
      </Popup>
    </div>
  );
};
export default View;
