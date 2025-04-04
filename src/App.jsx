/* Main Component */
import 
  React, { useState, // used to manage state
           useEffect // used for side effects
          } from 'react';
import axios from 'axios'; // used for making HTTP requests
import './App.css'; // for styling
import Posts from './components/Posts'; // Import Posts component 
import Pagination from './components/Pagination'; // Import Pagination component 

function App() {
  const [posts, setPosts] = useState([]); // Store fetched list of posts
  const [loading, setLoading] = useState(false); // Track whether data is being loaded
  const [currentPage, setCurrentPage] = useState(1); // Store current page number (useful for pagination)
  const [postsPerPage] = useState(10); // Keep postsPerPage constant at 10

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

  /* Pagination Calculations */
  // Find the last post index of the current page
  const indexOfLastPost = currentPage * postsPerPage; 
  // Find the first post index of the current page
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // Extract 10 posts for the current page
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // paginate() updates currentPage when a page number is clicked
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mt-5"> {/* Wrap UI inside a Bootstrap-styled div.container */}
            
            {/* Display heading */}
            <h1 className="text-primary mb-3">My Blog</h1>

            {/* Posts.jsx receives and displays only the extracted posts */}
            <Posts posts={currentPosts} loading={loading} />
            
            <Pagination 
              postsPerPage={postsPerPage} 
              totalPosts={posts.length}
              paginate={paginate} // Let child components to modify currentPage
            />
    </div>
  )
}

export default App
