import React, { useState, useEffect } from 'react';
import { fetchBlogPosts } from './fetchBlogPosts';

function BlogPosts() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const posts = await fetchBlogPosts();
      setBlogPosts(posts);
      setIsLoading(false);
    }

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {blogPosts.map(post => (
        <div key={post.sys.id}>
          <h2>{post.fields.title}</h2>
          <p>{post.fields.body}</p>
        </div>
      ))}
    </div>
  );
}

export default BlogPosts;
