import React, { FC } from "react";
import Link from "next/link";

import {
  CardMovies,
  CardMoviesImage,
  CardMoviesTitle,
  CardMoviesWrapper,
  AllMovies,
  AllMoviesTitle,
  AllMoviesTitleDes,
  GroupLinks,
  LinksBtnCarousel,
} from "./movies-page.styled";

import useMoviesCards from "./use-movies-cards";
import { MoviesCardsProps } from "./types";

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
            src={`https://image.tmdb.org/t/p/w500${data.results[0].poster_path}`}
          />
          <CardMoviesTitle>{data.results[0].original_title}</CardMoviesTitle>
        </CardMovies>
      </CardMoviesWrapper>
    </>
  );
};
export default MoviesCards;
