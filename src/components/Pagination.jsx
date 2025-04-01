/* Pagination Component */
import React from 'react'

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {

    const pageNumbers = [];

    /* Generating Page Numbers with For Loop */
    for(
        let i = 1; // Start from Page 1 
            i <= Math.ceil(// Round up partial pages
                           /* (e.g., 95 posts with 10 per page = 10 pages) */   

                        totalPosts / postsPerPage // Calculate how many pages are needed
                    ); 
            i++ // Continue until last page (page count)
         ) 
    {   
        pageNumbers.push(i); // Store page number in the array
    }

  /* Generate clickable links  */
  return (
    <nav> {/* Wraps pagination */}
        <ul className="pagination"> {/* Bootstrap-styled <ul> */}
            { 
                // Loop through pageNumbers and create a <li> for each page
                pageNumbers.map(number => (
                    <li key={number} className='page-item'>

                        {/* Making Page Numbers Clickable */}
                        <a onClick={ 
                                /* Pass paginate() as a prop and call it to update currentPage in App.jsx */
                                () => paginate(number) // Pass corresponding page number 
                                } 
                                
                            className='page-link' // Bootstrap-style
                        >
                            { 
                                number // Display page number 
                            }
                        </a>

                    </li>
                ))
            }
        </ul>
    </nav>
  )
}

export default Pagination