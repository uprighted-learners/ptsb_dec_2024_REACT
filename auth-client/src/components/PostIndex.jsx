import React, { useState, useEffect } from "react";
import Post from "./Post";

const PostIndex = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const response = await fetch("http://localhost:8080/posts/all", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    const data = await response.json();

    setPosts(data.Results);
  };

  return <div>

  {posts.map((post) => <Post key={post._id} post={post} />).reverse()}

  </div>;
};

export default PostIndex;
