import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const IMG_BASE_URL = "http://image.tmdb.org/t/p/w185/"


export default function MovieDetail() {
  const {title} = useParams();
  const {state} =useLocation();

  return (
    <div className='page-container'>
      <div id='detail-box'>
        <img src={IMG_BASE_URL+state.poster_path} alt="영화포스터"/>
        <div>{title}</div>
      </div>
    </div>
  )
}
