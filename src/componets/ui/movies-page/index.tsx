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
  PurpleLink,
} from "./movies-page.styled";

import useMoviesPage from "./use-movies-page";
import { LinksWrapper, LinksBtn } from "../navbar/navbar.styled";
import SearchIcon from "../../../assets/images/icons/search-normal.png";

const MoviesPage = () => {
  const { handleOnSubmit } = useMoviesPage();
  return (
    <MoviesPageWrapper>
      <Row>
        <Column xl={8}>
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
                  <Link href="/all" passHref legacyBehavior>
                    <PurpleLink key="primary">All</PurpleLink>
                  </Link>
                </LinksBtn>
                <LinksBtn>
                  <Link href="/movies">Movies</Link>
                </LinksBtn>
                <LinksBtn>
                  <Link href="/tv-shows">TV Shows</Link>
                </LinksBtn>
              </LinksWrapper>
            </GroupLinks>
          </TitleWrapper>
        </Column>
      </Row>
    </MoviesPageWrapper>
  );
};
export default MoviesPage;
