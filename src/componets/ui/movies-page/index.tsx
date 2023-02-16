import React from "react";
import { Row } from "styled-bootstrap-grid";
import Image from "next/legacy/image";
// import Image from "next/image";
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
} from "./movies-page.styled";

import useMoviesPage from "./use-movies-page";
import { Links, LinksPage } from "../navbar/navbar.styled";
import SearchIcon from "../../../assets/images/icons/search-normal.png";
import Link from "next/link";
import BackgroundImage from "../../../assets/images/background.png";
import { BackgroundImageWrapper } from "../../complex/user-list/user-list.styled";

const MoviesPage = () => {
  const { handleOnSubmit } = useMoviesPage();
  return (
    <MoviesPageWrapper>
      <BackgroundImageWrapper>
        <Image src={BackgroundImage} alt="bgImage" />
      </BackgroundImageWrapper>
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
              <Links>
                <LinksPage>
                  <Link href="/all">All</Link>
                </LinksPage>
                <LinksPage>
                  <Link href="/movies">Movies</Link>
                </LinksPage>
                <LinksPage>
                  <Link href="/tv-shows">TV Shows</Link>
                </LinksPage>
              </Links>
            </GroupLinks>
          </TitleWrapper>
        </Column>
      </Row>
    </MoviesPageWrapper>
  );
};
export default MoviesPage;
