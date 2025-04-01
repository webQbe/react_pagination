import 
  React, { useState, //  used to manage state
           useEffect // used for side effects
          } from 'react';
import axios from 'axios'; // used for making HTTP requests
import './App.css'; // for styling

function App() {
  const [posts, setPosts] = useState([]); // Store fetched list of posts
  const [loading, setLoading] = useState(false); // Track whether data is being loaded
  const [currentPage, setCurrentPage] = useState(1); // Store current page number (useful for pagination)
  const [postsPerPage, setPostsPerPage] = useState(10); //Determine how many posts to display per page.

  /* Fetching Data */
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true); // Set loading to true
      // Make an API request
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data); // Store fetched posts in posts state
      setLoading(false); // Set loading to false after fetching
    }

    fetchPosts();
  }, []); // Empty dependency array [] means fetchPosts() runs only on mount

  //Log the Data
  console.log(posts);

  return (
    <div className="container">
            <h1>App</h1>
    </div>
  )
}

export default App
