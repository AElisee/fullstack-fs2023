import React, { useState } from "react";

const NewPost = () => {
  const [message, setMessage] = useState("");

  const handleform = (e) => {
    e.preventDefault();
  };
  return (
    <form className="new-post-container" onSubmit={(e) => handleform(e)}>
      <textarea
        type="text"
        placeholder="Quoi de neuf ?"
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <input type="submit" value="Envoyer" />
    </form>
  );
};

export default NewPost;
