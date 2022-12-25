import React from "react";

const Outbox = ({ messages, userName }) => {
  return (
    <div id="outbox">
      {messages.map((message, i) => {
        if (message.fromUser.username === userName) {
          return (
            <div key={i} className="msgContainer">
              <div className="msgDetails">
                <h4>
                  {i}. Post title:- {message.post.title}
                  <hr></hr>
                </h4>
                <h6>
                  {userName} [You]: {message.content}
                </h6>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Outbox;
