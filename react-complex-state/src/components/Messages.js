import React from "react";

export default function Message(){

  const [messages, setMessages] = React.useState(["a", "b", "c", "d"])

  return (
    <>
      {/* {
        messages.length == 0 ? "You are all caught up!"  ||
        messages.length > 0 : 
        <h1>You have
          <span className="message">
            {messages.length}
          </span> unread message{messages.length == 1 ? "" : "s"}!
        </h1> 
      } */}
      {
        messages.length === 0 ? 
        <h1>You are all caught up!</h1> :
        <h1>You have <span className="message">
        {messages.length}
      </span> unread {messages.length > 1 ? "messages" : "message"}!</h1>
      }
    </>
  )
}