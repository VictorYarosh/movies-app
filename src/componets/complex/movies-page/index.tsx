import Link from 'next/link';
import React, { FC } from 'react';
import { Form } from 'react-uforms';
import { Col, Row } from 'styled-bootstrap-grid';

import { ContentTitle } from '../../ui/content-title';
import { MoviesCards } from '../../ui/movies-cards';
import { AllMovies, AllMoviesTitle, AllMoviesTitleDes } from '../../ui/movies-cards/movies-page.styled';
import Search from '../../ui/search';
import { ColumnStyled, GroupLinks, LinksBtnCarousel, LinksWrapper } from './movies-page.styled';
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
                <LinksBtnCarousel>
                  MoviesList
                  <Link href="/"></Link>
                </LinksBtnCarousel>
                <LinksBtnCarousel>
                  TV Shows
                  <Link href="/"></Link>
                </LinksBtnCarousel>
              </LinksWrapper>
            </GroupLinks>

            <AllMovies>
              <AllMoviesTitle>All</AllMoviesTitle>
              <AllMoviesTitleDes>()</AllMoviesTitleDes>
            </AllMovies>
          </ColumnStyled>
        </Col>
      </Row>

      <MoviesCards />
    </>
  );
};
export default MoviesPage;
