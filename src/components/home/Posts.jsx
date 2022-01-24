import React from 'react';
import Post from './Post';
import { Grid } from '@mui/material';



export const Posts = () => {
    let Posts = [1,2,3,4,5,6,7,8,9]
  return (
    Posts.map(post => (
    <Grid item lg={3} xs={12} sm={4}>
      <Post/>
    </Grid>
    ))
  );
};


