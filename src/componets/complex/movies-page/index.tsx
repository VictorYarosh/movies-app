import Link from 'next/link';
import React, { FC } from 'react';
import { Form } from 'react-uforms';
import { Col, Row } from 'styled-bootstrap-grid';

import { ContentTitle } from '../../ui/content-title';
import { MoviesCards } from '../../ui/movies-cards';
import {
  AllMovies,
  AllMoviesTitle,
  AllMoviesTitleDes,
  GroupLinks,
  LinksBtnCarousel,
} from '../../ui/movies-cards/movies-page.styled';
import { LinksBtn, LinksWrapper } from '../../ui/navbar/navbar.styled';
import Search from '../../ui/search';
import { ColumnStyled } from './movies-page.styled';
import useMoviesPage from './use-movies-page';

const MoviesPage: FC = () => {
  const { handleOnSubmit } = useMoviesPage();
  return (
    <>
      <Row>
        <Col xl={8}>
          <ColumnStyled>
            <ContentTitle />
          </ColumnStyled>
        </Col>

        <Col xl={5}>
          <ColumnStyled>
            <Form onSubmit={handleOnSubmit}>
              <Search />
            </Form>

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
              <AllMoviesTitleDes></AllMoviesTitleDes>
            </AllMovies>
          </ColumnStyled>
        </Col>
      </Row>

      <MoviesCards />
    </>
  );
};
export default MoviesPage;
