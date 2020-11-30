import React, { useState, useEffect } from "react";

import styled from "styled-components";

import PostItem from "./Postitem";

const Container = styled.section`
  background-color: var(--background-light);
`;

const PostsList = styled.div``;

const ErrorMessage = styled.div`
  background: linear-gradient(to right, #ff4b2b, #ff416c);
  border-radius: var(--border-radius);
  color: var(--color-lightest);
  font-size: 1.2rem;
  padding: 0.5em 1em;
`;

const Posts = props => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  const fetchPosts = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1/posts"
      );

      const data = await response.json();

      setPosts(data);
    } catch (err) {
      setError(true);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <Container>
      {!!posts.length && (
        <PostsList data-test-id="posts">
          {posts.map(post => (
            <PostItem key={post.id} {...post} />
          ))}
        </PostsList>
      )}

      {error && <ErrorMessage>An error occurred fetching posts!</ErrorMessage>}
    </Container>
  );
};

export default Posts;
