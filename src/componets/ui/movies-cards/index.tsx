import React, { FC } from "react";

import {
  CardMovies,
  CardMoviesImage,
  CardMoviesTitle,
  CardMoviesWrapper,
} from "../movies-cards/movies-page.styled";

import useMoviesCards from "./use-movies-cards";
import { MoviesCardsProps } from "./types";

import BlackWidow from "../../../assets/images/poster/Black-Widow-Box-Office.png";

const MoviesCards: FC<MoviesCardsProps> = ({ movie, index }) => {
  const { isLoading, data } = useMoviesCards({ movie, index });
  return (
    <CardMoviesWrapper>
      <CardMovies>
        <CardMoviesImage
          alt="Black-Widow"
          width={250}
          height={400}
          src={`https://image.tmdb.org/t/p/w500${data.results.backdrop_path}`}
        />

        <CardMoviesTitle>{data.title}</CardMoviesTitle>
      </CardMovies>
      <CardMovies>
        <CardMoviesImage
          src={BlackWidow}
          alt="Black-Widow"
          width={250}
          height={400}
        />

        <CardMoviesTitle>Black-Widow</CardMoviesTitle>
      </CardMovies>
      <CardMovies>
        <CardMoviesImage
          src={BlackWidow}
          alt="Black-Widow"
          width={250}
          height={400}
        />
        <CardMoviesTitle>Black-Widow</CardMoviesTitle>
      </CardMovies>
      <CardMovies>
        <CardMoviesImage
          src={BlackWidow}
          alt="Black-Widow"
          width={250}
          height={400}
        />
        <CardMoviesTitle>Black-Widow</CardMoviesTitle>
      </CardMovies>
    </CardMoviesWrapper>
  );
};
export default MoviesCards;
