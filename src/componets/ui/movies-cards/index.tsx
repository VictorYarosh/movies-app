import React, { FC } from 'react';

import {
  AllMovies,
  AllMoviesTitle,
  AllMoviesTitleDes,
  CardMovies,
  CardMoviesImage,
  CardMoviesTitle,
  CardMoviesWrapper,
} from './movies-page.styled';
import useMoviesCards from './use-movies-cards';

export const MoviesCards: FC = () => {
  const { data } = useMoviesCards();
  return (
    <>
      <AllMovies>
        <AllMoviesTitle>All</AllMoviesTitle>
        <AllMoviesTitleDes>(120)</AllMoviesTitleDes>
      </AllMovies>

      <CardMoviesWrapper>
        <CardMovies>
          <CardMoviesImage
            alt=""
            width={250}
            height={400}
            src={`https://image.tmdb.org/t/p/w500${data?.results[0].poster_path}`}
          />

          <CardMoviesTitle>{data?.results[0].original_title}</CardMoviesTitle>
        </CardMovies>
      </CardMoviesWrapper>
    </>
  );
};
