import React, { FC, useState } from "react";

import {
  CardMovies,
  CardMoviesImage,
  CardMoviesTitle,
  CardMoviesWrapper,
} from "./movies-page.styled";

import useMoviesCards from "./use-movies-cards";

const MoviesCards: FC = () => {
  const { movie } = useMoviesCards();
  return (
    <CardMoviesWrapper>
      <CardMovies>
        <CardMoviesImage
          alt="Black-Widow"
          width={250}
          height={400}
          src={`https://image.tmdb.org/t/p/w500${movie.results[0].poster_path}`}
        />
        <CardMoviesTitle>{movie.results[0].original_title}</CardMoviesTitle>
      </CardMovies>
    </CardMoviesWrapper>
  );
};
export default MoviesCards;
