import { Row } from "styled-bootstrap-grid";
import Link from "next/link";
import React from "react";

import Search from "../search";
import { LinksBtn, LinksWrapper } from "../navbar/navbar.styled";

import {
  AllMovies,
  AllMoviesTitle,
  AllMoviesTitleDes,
  Column,
  GroupLinks,
  LinksBtnCarousel,
  Title,
  TitleDescription,
  TitleWrapper,
} from "../../ui/content-title/content-title.styled";

const ContentTitle = () => {
  return (
    <>
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
    </>
  );
};

export default ContentTitle;
