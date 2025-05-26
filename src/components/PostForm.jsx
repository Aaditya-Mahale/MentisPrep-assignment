import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";

const PostForm = ({ onAddPost }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = { title, body, userId: 1 };

    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(newPost),
    });

    const data = await res.json();
    onAddPost(data);
    setTitle("");
    setBody("");
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
      <Typography variant="h5" gutterBottom>
        Create New Post
      </Typography>
      <TextField
        label="Title"
        variant="outlined"
        fullWidth
        margin="normal"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <TextField
        label="Body"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        margin="normal"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        required
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </Box>
  );
};

export default PostForm;
