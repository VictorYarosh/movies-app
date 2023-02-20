import React from "react";
import Link from "next/link";
import { Row } from "styled-bootstrap-grid";
import Image from "next/legacy/image";
import { Form, Text } from "react-uforms";

import {
  Column,
  MoviesPageWrapper,
  SearchIconWrapper,
  SearchInput,
  Title,
  TitleDescription,
  TitleWrapper,
  GroupLinks,
  AllMovies,
  AllMoviesTitle,
  AllMoviesTitleDes,
  CardMoviesWrapper,
  CardMovies,
} from "./movies-page.styled";

import useMoviesPage from "./use-movies-page";
import { LinksWrapper, LinksBtn } from "../navbar/navbar.styled";
import SearchIcon from "../../../assets/images/icons/search-normal.png";
import BlackWidow from "../../../assets/images/poster/Black-Widow-Box-Office.png";

const MoviesPage = () => {
  const { handleOnSubmit } = useMoviesPage();
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
            <SearchInput>
              <Form onSubmit={handleOnSubmit}>
                <button type="submit">
                  <SearchIconWrapper>
                    <Image src={SearchIcon} alt="searchIcon" />
                  </SearchIconWrapper>
                </button>
                <Text
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Search Movies or TV Shows"
                />
              </Form>
            </SearchInput>

            <GroupLinks>
              <LinksWrapper>
                <LinksBtn>
                  All
                  <Link href="/all"></Link>
                </LinksBtn>
                <LinksBtn>
                  Movies
                  <Link href="/movies"></Link>
                </LinksBtn>
                <LinksBtn>
                  TV Shows
                  <Link href="/tv-shows"></Link>
                </LinksBtn>
              </LinksWrapper>
            </GroupLinks>
            <AllMovies>
              <AllMoviesTitle>All</AllMoviesTitle>
              <AllMoviesTitleDes>(120)</AllMoviesTitleDes>
            </AllMovies>
          </TitleWrapper>
        </Column>
        <Column xl={12}>
          <CardMoviesWrapper>
            <CardMovies>
              <Image src={BlackWidow} alt="blackWidow" />
            </CardMovies>
            <CardMovies></CardMovies>
            <CardMovies></CardMovies>
            <CardMovies></CardMovies>
          </CardMoviesWrapper>
        </Column>
      </Row>
    </MoviesPageWrapper>
  );
};
export default MoviesPage;
