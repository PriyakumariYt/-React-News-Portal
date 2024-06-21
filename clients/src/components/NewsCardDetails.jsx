
import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const NewsCardDetails = ({ data }) => {
  const { id } = useParams();
  const article = data[id];

  if (!article) {
    return <div>Article not found</div>;
  }

  const { title, urlToImage, description, content, url } = article;

  return (
    <div className="card-details">
      <img src={urlToImage} alt={title} className="card-media" />
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
      <p>{content}</p>
      <Link className='IntrestedBtn' to={url} target="_blank" rel="noopener noreferrer">Read the full article</Link>
    </div>
  );
};

export default NewsCardDetails;
