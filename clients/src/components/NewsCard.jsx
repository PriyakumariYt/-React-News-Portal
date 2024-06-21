
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";
const NewsCard = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 9;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };



  return (
    <>
      <h1 className='Header'>All News</h1>
      <div className='Container'>
        <section className="main-container">
          {currentData.map((curElem, index) => {
            const { url, title, urlToImage, description } = curElem;
            const truncatedDescription = description.length > 100 ? `${description.slice(0, 100)}...` : description;
            const truncatedTitle = title.length > 35 ? `${title.slice(0, 35)}...` : title;

            return (
              <div className="card-container" key={index}>
                <div className="card">
                  <img src={urlToImage} alt={title} className="card-media" />
                  <h2 className="card-title">{truncatedTitle}</h2>
                  <p className="card-description">{truncatedDescription}</p>
                  <Link to={`/newsData/${index}`} className="IntrestedBtn">
                    Read More
                  </Link>
                  <Link className='IntrestedBtn'>
                  <FaHeart />
                  </Link>
             
                </div>
              </div>
            );
          })}
        </section>
      </div>
      <div className="pagination">
        <button disabled={currentPage === 1} onClick={prevPage}>
          Previous
        </button>
        <button disabled={indexOfLastItem >= data.length} onClick={nextPage}>
          Next
        </button>
      </div>
    </>
  );
};

export default NewsCard;

