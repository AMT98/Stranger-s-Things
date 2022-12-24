import React from "react";
import Popup from "./Popup";

const View = () => {
  return (
    <Popup btnTxt="View" modalTitle="View" submitBtnTxt="Close">
      <form>
        <h1>View the post</h1>
      </form>
    </Popup>
  );
};
export default View;
