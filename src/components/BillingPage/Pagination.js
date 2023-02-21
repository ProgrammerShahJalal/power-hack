import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className='text-center'>
      <ul className='pagination flex gap-x-4 justify-center'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item border border-2 p-2 mt-2 px-2'>
            <p style={{ cursor: 'pointer' }} onClick={() => paginate(number)} className='page-link'>
              {number}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;