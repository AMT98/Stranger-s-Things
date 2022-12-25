import React from "react";

const Outbox = ({ messages, userName }) => {
  return (
    <div id="outbox">
      {messages.map((message, i) => {
        if (message.fromUser.username === userName) {
          return (
            <div key={i} className="postContainer msgContainer">
              <div className="postDetails msgDetails">
                <h1 className="postContainer msgContainer">
                  Outbox
                  <span className="material-symbols-outlined">
                    outgoing_mail
                  </span>
                </h1>
                <hr></hr>
                <h4>
                  {i}. Post title:- {message.post.title}
                </h4>
                <p>
                  {userName}: {message.content}
                </p>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Outbox;
