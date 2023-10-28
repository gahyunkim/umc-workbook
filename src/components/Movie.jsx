import React from "react"

const IMG_BASE_URL = "http://image.tmdb.org/t/p/w185/"

function Movie({title, vote_average, poster_path,overview}) {
    return (
      <div className="movie-container" >
        <img src={IMG_BASE_URL+poster_path} alt="영화포스터"/>
        <div className="movie-info">
            <h4>{title}</h4>
            <span>{vote_average}</span>
        </div>
        <div className="movie-sub">
            <h4>{title}</h4>
            <p>{overview}</p>
        </div>
      </div>
    )
  }
  
  export default Movie