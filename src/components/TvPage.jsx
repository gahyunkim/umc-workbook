import React from 'react'

export const IMG_BASE_URL = "http://image.tmdb.org/t/p/w185/"

function TvPage({poster_path, name, vote_average, overview}) {
  return (
    <div className="movie-container">
        <img src={IMG_BASE_URL+poster_path} alt="tv_poster_img"/>
        <div className="movie-info">
            <h4>{name}</h4>
            <span>{vote_average}</span>
        </div>
        <div className="movie-sub">
            <h4>{name}</h4>
            <p>{overview}</p>
        </div>
      </div>
  )
}

export default TvPage
