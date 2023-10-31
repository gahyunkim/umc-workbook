import React from "react"
import { useNavigate } from "react-router-dom"

export const IMG_BASE_URL = "http://image.tmdb.org/t/p/w185/"

// 상세 페이지로 전체 데이터를 넘기기 위해서 해당 값들을 props로 묶어줌 
function Movie(props) {
  const navigate = useNavigate();

  const onClickItem = () =>{
    navigate(`/movie/${props.title}`,{
      state: props
    });
  }
  
  return (
    <div className="movie-container" onClick={onClickItem}>
      <img src={IMG_BASE_URL+props.poster_path} alt="영화포스터"/>
      <div className="movie-info">
          <h4>{props.title}</h4>
          <span>{props.vote_average}</span>
      </div>
      <div className="movie-sub">
          <h4>{props.title}</h4>
          <p>{props.overview}</p>
      </div>
    </div>
  ) 
  }
  
  export default Movie