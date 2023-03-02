import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { Row } from "styled-bootstrap-grid";
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
  LinksBtnCarousel,
  CardMoviesTitle,
  CardMoviesImage,
} from "./movies-page.styled";

import useMoviesPage from "./use-movies-page";
import { LinksWrapper, LinksBtn } from "../../ui/navbar/navbar.styled";
import SearchIcon from "../../../assets/images/icons/search-normal.png";
import BlackWidow from "../../../assets/images/poster/Black-Widow-Box-Office.png";
import { ButtonProps } from "./types";

const MoviesPage: FC<ButtonProps> = ({ primary }) => {
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
                  placeholder="Search MoviesList or TV Shows"
                />
              </Form>
            </SearchInput>

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
      <CardMoviesWrapper>
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
    </MoviesPageWrapper>
  );
};
export default MoviesPage;
