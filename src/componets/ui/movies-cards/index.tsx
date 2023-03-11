import React, { FC } from "react";

import {
  CardMovies,
  CardMoviesImage,
  CardMoviesTitle,
  CardMoviesWrapper,
  AllMovies,
  AllMoviesTitle,
  AllMoviesTitleDes,
} from "./movies-page.styled";

import useMoviesCards from "./use-movies-cards";

const MoviesCards: FC = () => {
  const { data, isLoading, handleOnSubmit, filterMovies } = useMoviesCards();
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
            src={`https://image.tmdb.org/t/p/w500${filterMovies}`}
          />
          <CardMoviesTitle></CardMoviesTitle>
        </CardMovies>
      </CardMoviesWrapper>
    </>
  );
};
export default MoviesCards;
