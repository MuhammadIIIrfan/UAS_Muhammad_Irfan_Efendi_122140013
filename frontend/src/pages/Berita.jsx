import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Berita() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then(res => setPosts(res.data));
  }, []);
  return (
    <div className="container mt-5">
      <h2>Daftar Berita</h2>
      <ul className="list-group">
        {posts.map(post => (
          <li className="list-group-item" key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}