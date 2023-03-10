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

import Search from "../search";
import { LinksBtn, LinksWrapper } from "../navbar/navbar.styled";

const MoviesCards: FC = () => {
  const { data } = useMoviesCards();
  return (
    <>
      <Search />

      <GroupLinks>
        <LinksWrapper>
          <LinksBtnCarousel>
            All
            <Link href="/"></Link>
          </LinksBtnCarousel>
          <LinksBtn>
            MoviesList
            <Link href="/"></Link>
          </LinksBtn>
          <LinksBtn>
            TV Shows
            <Link href="/"></Link>
          </LinksBtn>
        </LinksWrapper>
      </GroupLinks>

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
