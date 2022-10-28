import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

//   const handlePrevious = (event) => {
//     event.preventDefault();
//     paginate(number - 1)
//   }

  return (
    <nav>
      <section className="pagination">
        {pageNumbers.map((number) => (
          <div key={number} className="page-item">
            <a onClick={() => paginate(number)} href="!#" className="page-link">
              {number}
            </a>
          </div>
        ))}
      </section>
    </nav>
  );
};

export default Pagination;
