// src/components/ScrollPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ScrollPage.css'; // Importing CSS for styling

function ScrollPage() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1); // For pagination
  const [hasMore, setHasMore] = useState(true); // To check if more posts are available
  const [loading, setLoading] = useState(false); // To handle loading state

  useEffect(() => {
    fetchPosts();
    // eslint-disable-next-line
  }, [page]);

  const fetchPosts = async () => {
    if (loading) return; // Prevent multiple simultaneous fetches
    setLoading(true);
    try {
      // Fetch 10 random images from Lorem Picsum
      const imagesResponse = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=10`);

      // Fetch 10 random texts from JSONPlaceholder
      const textsResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`);

      if (imagesResponse.data.length === 0 || textsResponse.data.length === 0) {
        setHasMore(false);
        setLoading(false);
        return;
      }

      // Combine images and texts into a single post object
      const combinedPosts = imagesResponse.data.map((image, index) => ({
        id: `${image.id}-${page}-${index}`,
        imageUrl: `https://picsum.photos/id/${image.id}/600/800`, // Fixed size for consistency
        text: textsResponse.data[index]?.body || 'No text available.',
      }));

      setPosts(prevPosts => [...prevPosts, ...combinedPosts]);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
    setLoading(false);
  };

  // Handle scroll to load more posts
  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop + 100 >= document.documentElement.offsetHeight && hasMore && !loading) {
      setPage(prevPage => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line
  }, [hasMore, loading]);

  return (
    <div className="scroll-page">
      {posts.map(post => (
        <div key={post.id} className="post">
          <img src={post.imageUrl} alt={`Post ${post.id}`} className="post-image" />
          <div className="post-text">
            <p>{post.text}</p>
          </div>
        </div>
      ))}
      {loading && <div className="loading">Loading more posts...</div>}
      {!hasMore && <div className="end">You've reached the end!</div>}
    </div>
  );
}

export default ScrollPage;
