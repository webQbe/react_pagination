/* Display Component */
import React from 'react'

const Posts = ({ posts, loading }) => {

    /* Handling Loading State */
    if (loading) {// If loading is true, it displays "Loading..." instead of the posts
        return <h2>Loading...</h2>
    }

  /* Rendering Posts */
  return (
    <ul className="list-group mb-4"> {/* Use <ul> with Bootstrap styling. */}
        
        { posts.map(post => ( // Iterate over the posts array using .map()

            <li // Each post is displayed as a <li>
                key={post.id} // Ensures React uniquely identifies each item
                className="list-group-item" // Bootstrap styling
            > 
                {   
                    post.title // Display post title
                } 
            </li>

        )) }

    </ul>
  );
};

export default Posts