import { combineReducers } from "redux";

import Posts from "./posts"; // import the posts reducer

export default combineReducers({ posts: Posts }); // export the combined reducers
