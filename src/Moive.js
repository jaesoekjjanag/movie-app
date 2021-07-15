import React from 'react';

const Movie = ({ year, title, summary, poster, genres }) => {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <div className='movie-data'></div>
      <h3 className='title'>{title}</h3>
      <h5 className='year'>{year}</h5>
      <ul className="genres">
        {genres.map((genre, index) => (
          <li key={index} className="genres__genre">
            {genre}
          </li>
        ))}
      </ul>
      <p className='summary'>{summary}</p>
    </div>
  );
}

export default Movie;