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

export const MoviesCards: FC = () => {
  const { data, isLoading, handleOnSubmit } = useMoviesCards();
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
            src={`https://image.tmdb.org/t/p/w500${data.results[0].poster_path}`}
          />

          <CardMoviesTitle>{data.results[0].title}</CardMoviesTitle>
        </CardMovies>
      </CardMoviesWrapper>
    </>
  );
};
