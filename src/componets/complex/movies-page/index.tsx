import Link from 'next/link';
import React, { FC } from 'react';
import { Form } from 'react-uforms';
import { Col, Row } from 'styled-bootstrap-grid';

import { MoviesCards } from '../../ui/movies-cards';
import Search from '../../ui/search';
import { ColumnStyled, GroupLinks, LinksBtn, LinksWrapper } from './movies-page.styled';
import useMoviesPage from './use-movies-page';

const MoviesPage: FC = () => {
  const { handleOnSubmit } = useMoviesPage();

  return (
    <>
      <Row>
        <Col xl={8}>
          <ColumnStyled></ColumnStyled>
        </Col>

        <Col md={6} xl={5}>
          <ColumnStyled>
            <Form onSubmit={handleOnSubmit}>
              <Search />
            </Form>

            <GroupLinks>
              <LinksWrapper>
                <LinksBtn $primary>All</LinksBtn>
                <LinksBtn>MoviesList</LinksBtn>
                <LinksBtn>
                  <Link href="/tv-shows-page">TV Shows</Link>
                </LinksBtn>
              </LinksWrapper>
            </GroupLinks>
          </ColumnStyled>
        </Col>
      </Row>

      <MoviesCards />
    </>
  );
};
export default MoviesPage;
