import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPosts = createAsyncThunk("getPosts", async (_, thunkAPI) => {
  axios
    .get("http://localhost:5000/post/")
    .then((res) => thunkAPI.dispatch(getPostsSucces(res.data)));
});

export const postSlice = createSlice({
  name: "posts",
  initialState: { postsData: [] },
  reducers: {
    getPostsSucces: (state, { payload }) => {
      state.postsData = payload;
    },
    createPost: (state, { payload }) => {
      state.postsData.push(payload);
    },
    editPost: (state, { payload }) => {
      state.postsData = state.postsData.map((post) => {
        if (post._id === payload[0]) {
          return {
            ...post,
            message: payload[1],
          };
          // ne pas oublier de retourner post dans else{}
        } else return post;
      });
    },
    deletePost: (state, { payload }) => {
      state.postsData = state.postsData.filter((post) => post._id !== payload);
    },
    like: (state, { payload }) => {
      state.postsData = postsData.map((post) => {
        if (post_id == payload[0]) {
          return { ...post, likers: [post.likers, payload[1]] };
        } else return post;
      });
    },
  },
});

export const { getPostsSucces, createPost, editPost, deletePost, like } =
  postSlice.actions;
export default postSlice.reducer;
