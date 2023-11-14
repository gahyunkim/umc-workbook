import React from 'react'
import { tvDummy } from '../tvDummy';
import TvPage from '../components/TvPage';

export default function TV() {
  return (
    <div className="app-container">
    {
     tvDummy.results.map((item) => {
        return (
          <TvPage
            name={item.name}
            poster_path={item.poster_path}
            vote_average={item.vote_average}
            overview={item.overview}
          />
        )
      })
    }
  </div>
  );
}