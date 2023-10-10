import Movie from './Components/Movie/Movie.style';
import {movies} from './movieDummy';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #22254b;
  }
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: row;
`;


function App() {
  return (
    <><GlobalStyle/>
    <Container>
      {
        movies.results.map((item) => {
          return (
            <Movie
              title={item.title}
              poster_path={item.poster_path}
              vote_average={item.vote_average}
              overview={item.overview}
            />
          )
        })
      }
      </Container>
    </>
  );
}

export default App;