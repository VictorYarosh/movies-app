import React, { FC, useState } from "react";
import Link from "next/link";
import { Row } from "styled-bootstrap-grid";

import {
  Column,
  MoviesPageWrapper,
  Title,
  TitleDescription,
  TitleWrapper,
  GroupLinks,
  AllMovies,
  AllMoviesTitle,
  AllMoviesTitleDes,
  LinksBtnCarousel,
} from "./movies-page.styled";

import { CardsContext, MoviesPage } from "./cards-context";

import { LinksWrapper, LinksBtn } from "../../ui/navbar/navbar.styled";
import MovieCards from "../../ui/movies-cards";
import Search from "../../ui/search";

const MoviesPage: FC<MoviesPage> = ({ primary }) => {
  const [movies, setMovies] = useState<string[]>([""]);

  return (
    <MoviesPageWrapper>
      <Row>
        <Column xl={7}>
          <TitleWrapper>
            <Title>MaileHereko</Title>
            <TitleDescription>
              List of movies and TV Shows, I, Pramod Poudel have watched till
              date. Explore what I have watched and also feel free to make a
              suggestion. 😉
            </TitleDescription>
            <Search />

            <GroupLinks>
              <LinksWrapper>
                <LinksBtnCarousel>
                  {primary}
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
          </TitleWrapper>
        </Column>
      </Row>
      <CardsContext.Provider value={{ movies, setMovies }}>
        {movies.map((movie, index) => {
          return (
            <MovieCards key={`${movie}-${index}`} movie={movie} index={index} />
          );
        })}
      </CardsContext.Provider>
    </MoviesPageWrapper>
  );
};
export default MoviesPage;
