import React from "react";
import Post from "./Post/Post";

import { Grid, CircularProgress } from "@material-ui/core";
import useStyles from "./styles";
import { useSelector } from "react-redux"; // import the useSelector hook from react-redux

const Posts = () => {
  const classes = useStyles();

  const allPosts = useSelector((state) => state.posts); // use the useSelector hook to get the posts from the redux store
  console.log(allPosts);

  return !allPosts.length ? (
    <CircularProgress /> // if there are no posts, show a loading spinner
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {allPosts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6}>
          <Post post={post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
