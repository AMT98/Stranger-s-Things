import React from "react";

const Inbox = ({ messages, userName }) => {
  return (
    <div id="inbox">
      {messages.map((message, i) => {
        if (message.fromUser.username !== userName) {
          return (
            <div key={i} className="msgContainer">
              <div className="msgDetails">
                <h4>Post title:- {message.post.title}</h4>
                <hr></hr>
                <p>From User- {message.fromUser.username}</p>
                <p>
                  - {message.fromUser.username}: {message.content}
                </p>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};
export default Inbox;
