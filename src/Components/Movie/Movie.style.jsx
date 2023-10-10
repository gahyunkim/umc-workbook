import React from 'react';
import styled from 'styled-components';

const IMG_BASE_URL = "http://image.tmdb.org/t/p/w185/"

const MovieContainer = styled.div`
  position:relative;
  width: 250px;
  margin: 16px;
  background-color: #373b69;
  color: white;
  border-radius: 5px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);

  &:hover .movie-sub {
    display: inline-block;
  }

  img {
    width: 100%;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }
`;

const MovieInfo = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
`;

const MovieTitle = styled.h4`
  margin: 0;
`;

const MovieRating = styled.span`
  margin-left: 3px;
`;

const MovieSub = styled.div`
  opacity: 0.8;
  overflow:hidden;
  border-radius: 5px;
  text-overflow: ellipsis;
  display: none;
  top: 0;
  left: 0;
  position: absolute;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.63);
`;

const SubTitle = styled.h4`
  margin-left: 10px;
`;

const SubText = styled.p`
  margin-left: 10px;
`;


function Movie({ title, vote_average, poster_path, overview }) {
  return (
      <MovieContainer>
        <img src={IMG_BASE_URL + poster_path} alt="영화 포스터" />
        <MovieInfo>
          <MovieTitle>{title}</MovieTitle>
          <MovieRating>{vote_average}</MovieRating>
        </MovieInfo>
        <MovieSub className="movie-sub">
          <SubTitle>{title}</SubTitle>
          <SubText>{overview}</SubText>
        </MovieSub>
      </MovieContainer>
  );
}

export default Movie;
