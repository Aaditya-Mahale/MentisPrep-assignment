import React, { useState, useEffect } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import { Container, Typography } from "@mui/material";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data.slice(0, 10)))
      .catch((err) => console.error("Failed to fetch posts:", err));
  }, []);

  const handleAddPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Mentis Prep
      </Typography>
      <PostForm onAddPost={handleAddPost} />
      <PostList posts={posts} />
    </Container>
  );
}

export default App;
