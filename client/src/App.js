import React, { useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";

import memories from "./images/logo.png";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import useStyles from "./styles";

import { useDispatch } from "react-redux"; // import the useDispatch hook from react-redux
import { getPosts } from "./actions/posts"; // import the getPosts action creator

// Initialize the App component
const App = () => {
  const classes = useStyles(); // initialize the styles

  const dispatch = useDispatch(); // initialize the useDispatch hook

  useEffect(() => { // initialize the useEffect hook
    dispatch(getPosts()); // dispatch the getPosts action creator
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Memories
        </Typography>
        <img className={classes.image} src={memories} alt="logo" height="60" />
      </AppBar>

      <Grow in={true}>
        <Grid
          container
          justifyContent="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={6}>
            <Posts />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form />
          </Grid>
        </Grid>
      </Grow>
    </Container>
  );
};

export default App;
