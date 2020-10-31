import React from "react";
import "./styles.css";

export default function PaginationSize({
  repositorioPerPage,
  totalPosts,
  paginate,
}) {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalPosts / repositorioPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <div>
      {pageNumber.map((number) => (
        <div className="li-pagination">
          <button
            key={number}
            count={number}
            onClick={() => paginate(number)}
            page={number}
          >
            {number}
          </button>
        </div>
      ))}
    </div>
  );
}
