import { Box } from '@mui/material';
import React from 'react';
import Post from './Post';

const Feed = () => {
  return (
    <Box
      flex={4}
      p={2}
      sx={{
        margin: 0,
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
  );
};

export default Feed;
