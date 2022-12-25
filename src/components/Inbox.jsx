import React from "react";

const Inbox = ({ messages, userName }) => {
  return (
    <div>
      {messages.map((message, i) => {
        if (message.fromUser.username !== userName) {
          return (
            <div key={i} className="postContainer msgContainer">
              <div className="postDetails msgDetails">
                <h1 className="postContainer msgContainer">
                  Inbox
                  <span className="material-symbols-outlined">
                    mark_email_unread
                  </span>
                </h1>
                <hr></hr>
                <h4>Post title:- {message.post.title}</h4>
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
