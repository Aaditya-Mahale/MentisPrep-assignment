import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

const PostList = ({ posts }) => {
  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Posts
      </Typography>
      {posts.map((post) => (
        <Card key={post.id} sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="h6">{post.title}</Typography>

            <Typography variant="body2" color="text.secondary">
              {post.body}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default PostList;
