import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { createPost, getPosts } from "../feature/post.slice";

const NewPost = () => {
  const [message, setMessage] = useState("");
  const userId = useSelector((state) => state.user.userId);
  const dispatch = useDispatch();

  const handleform = (e) => {
    e.preventDefault();

    const data = {
      message,
      author: userId,
    };
    axios.post("http://localhost:5000/post/", data).then(() => {
      dispatch(createPost(data));
      // dispatch getPosts permet de recupperer l'ID du nouvel objet créer dans la BD
      // sans oublier que nous avons utilser createAsyncThunk() dans le silce.post
      dispatch(getPosts());
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
