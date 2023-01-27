import React, { useState } from "react";
import axios from "axios";

const NewPost = ({ userId }) => {
  const [message, setMessage] = useState("");

  const handleform = (e) => {
    e.preventDefault();

    axios.post("http://localhost:5000/post/", {
      message,
      author: userId,
    });

    setMessage("");
  };
  return (
    <form className="new-post-container" onSubmit={(e) => handleform(e)}>
      <textarea
        type="text"
        placeholder="Quoi de neuf ?"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      ></textarea>
      <input type="submit" value="Envoyer" />
    </form>
  );
};

export default NewPost;
